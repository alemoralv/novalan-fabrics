"""Quita los contadores de seccion (01 / 06) de todas las paginas del sitio.
Reutilizable: se vuelve a correr cuando aparezcan carpetas de idioma nuevas."""
import re, sys, pathlib
SITE = pathlib.Path(r"C:\Users\alexm\novalan_webpage\site")
# el span, mas cualquier espacio en blanco que quede colgando antes de el
PAT = re.compile(r'\s*<span class="nv-rule__index"[^>]*>[^<]*</span>')
total = 0
for f in sorted(SITE.glob("*.html")) + sorted(SITE.glob("*/*.html")):
    t = f.read_text(encoding="utf-8")
    t2, n = PAT.subn("", t)
    if n:
        f.write_text(t2, encoding="utf-8"); total += n
        print(f"  {f.relative_to(SITE)!s:22} -{n}")
print(f"total eliminados: {total}")
