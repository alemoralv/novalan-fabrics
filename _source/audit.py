# -*- coding: utf-8 -*-
"""Auditoria completa del sitio: enlaces, estructura, idiomas y prohibidos."""
import os, re, html, sys, pathlib
SITE = pathlib.Path(r"C:\Users\alexm\novalan_webpage\site")
LOCALES = {"es-MX": "", "en": "en", "it": "it", "fr": "fr", "ja": "ja", "zh-Hans": "zh", "ko": "ko"}
ES_SLUG = {"index": "index.html", "about": "nosotros.html", "products": "productos.html",
           "processes": "procesos.html", "contact": "contacto.html"}

pages = sorted(SITE.glob("*.html")) + sorted(SITE.glob("*/*.html"))
pages = [p for p in pages if p.parent.name != "assets"]
ATTR = re.compile(r'(?:href|src)\s*=\s*"([^"]+)"')
SRCSET = re.compile(r'srcset\s*=\s*"([^"]+)"')

broken, ext, ok = [], set(), 0
problems = []
for p in pages:
    rel = str(p.relative_to(SITE)).replace("\\", "/")
    t = p.read_text(encoding="utf-8")
    refs = ATTR.findall(t)
    for s in SRCSET.findall(t):
        refs += [c.strip().split()[0] for c in s.split(",") if c.strip()]
    for r in refs:
        r = html.unescape(r).strip()
        if not r or r.startswith(("#", "mailto:", "tel:", "data:", "javascript:")): continue
        if r.startswith(("http://", "https://", "//")): ext.add(r.split("?")[0]); continue
        tgt = os.path.normpath(os.path.join(p.parent, r.split("#")[0].split("?")[0]))
        if os.path.exists(tgt): ok += 1
        else: broken.append((rel, r))
    # estructura
    lang = re.search(r'<html[^>]*lang="([^"]+)"', t)
    lang = lang.group(1) if lang else "?"
    expected = [k for k, v in LOCALES.items() if v == (p.parent.name if p.parent != SITE else "")]
    if expected and lang != expected[0]: problems.append(f"{rel}: lang={lang}, esperado {expected[0]}")
    n_alt = len(re.findall(r'<link rel="alternate" hreflang=', t))
    if n_alt != 8: problems.append(f"{rel}: {n_alt} link-alternates, esperado 8")
    if len(re.findall(r"<h1[ >]", t)) != 1: problems.append(f"{rel}: {len(re.findall(r'<h1[ >]', t))} h1")
    if re.search(r"morera", t, re.I): problems.append(f"{rel}: contiene el apellido")
    if "nv-rule__index" in t: problems.append(f"{rel}: contiene contador de seccion")
    if re.search(r"Ã.|Â.|ï»¿", t): problems.append(f"{rel}: mojibake")
    imgs = re.findall(r"<img\b[^>]*>", t)
    na = [i for i in imgs if "alt=" not in i]
    nd = [i for i in imgs if not ("width=" in i and "height=" in i)]
    if na: problems.append(f"{rel}: {len(na)} img sin alt")
    if nd: problems.append(f"{rel}: {len(nd)} img sin width/height")
    if "charset" not in t[:200]: problems.append(f"{rel}: charset no esta al inicio del head")

print(f"paginas: {len(pages)}   referencias locales ok: {ok}   ROTAS: {len(broken)}")
for r in broken[:25]: print("   ROTA", r)
print(f"\nenlaces externos ({len(ext)}):")
for e in sorted(ext): print("   ", e[:110])
print(f"\nproblemas de estructura: {len(problems)}")
for x in problems[:40]: print("   ", x)
sys.exit(1 if (broken or problems) else 0)
