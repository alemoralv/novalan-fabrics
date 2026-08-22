# Novalan, S.A. de C.V. — sitio web

Reconstrucción del sitio de [novalanfabrics.com.mx](http://novalanfabrics.com.mx/welcome.html):
mismo contenido, diseño nuevo, y versiones reales en varios idiomas.

Novalan y San Ildefonso Fábrica de Tejidos de Lana forman un grupo lanero y textil con más de
170 años de historia, en Tulancingo, Hidalgo. San Ildefonso abrió en 1847 y es la fábrica textil
más antigua del continente americano; Novalan fue fundada en 1983 por la familia propietaria del grupo.

## Ver el sitio

Está publicado con GitHub Pages. También funciona **abriendo `site/index.html` directamente**, sin
servidor y sin conexión a internet: no hay CDN, no hay tipografías remotas, no hay analítica. Lo
único que sale a la red es el mapa de Google y el video de YouTube, y el video solo se carga si le
das clic.

## Estructura

```
site/                     el sitio publicado
  index.html …            español de México, en la raíz
  en/ it/ fr/ ja/ zh/ ko/ los demás idiomas
  assets/
    css/site.css          la única hoja de estilo propia
    css/tokens/           tokens del sistema de diseño Novalan
    js/site.js            todo el JavaScript, sin dependencias
    js/weave.js           <nv-weave>: telar animado por scroll (canvas), decorativo
    fonts/                Bodoni Moda, Archivo, Pinyon Script (OFL 1.1), servidas localmente
    img/fabric/           las 13 familias de tela, en WebP y JPEG, a 1600 y 800 px
    img/photo/            fotografía de planta
    brand/                el logotipo

_source/                  insumos, no se publica
  pages/                  el HTML original del sitio viejo, tal cual se descargó
  images/                 las imágenes originales sin tocar
  CONTENT.md              inventario de contenido verificado, en español e inglés
  I18N.md                 mapa de idiomas, cadenas de interfaz y glosario textil
  BUILD_CONTRACT.md       reglas de construcción y de diseño
  POLISH.md               defectos encontrados en revisión visual

Novalan Design System (1)/   el sistema de diseño del que sale el lenguaje visual
```

## Idiomas

El sitio original ofrecía siete idiomas en su menú, pero seis de esos enlaces llevaban a la misma
página en inglés. **Aquí los siete existen de verdad**: 35 páginas, cinco por idioma.

| Idioma | Carpeta | `lang` |
| --- | --- | --- |
| Español de México | raíz | `es-MX` |
| English | `en/` | `en` |
| Italiano | `it/` | `it` |
| Français | `fr/` | `fr` |
| 日本語 | `ja/` | `ja` |
| 中文 | `zh/` | `zh-Hans` |
| 한국어 | `ko/` | `ko` |

Cada página enlaza a su equivalente en los otros seis idiomas —nunca a la portada— y declara los
ocho `hreflang` correspondientes.

No son traducciones automáticas: el vocabulario textil sigue un glosario fijado en
`_source/I18N.md`, de modo que *worsted* es *peinada / pettinato / peigné / 梳毛 / 精纺 / 소모* y
*woolen* es *cardada / cardato / cardé / 紡毛 / 粗纺 / 방모*. La razón social, la dirección, los
teléfonos y todas las cifras quedan sin traducir en los siete idiomas.

Japonés, chino y coreano usan tipografía del sistema (Mincho, Songti, Myeongjo) activada por
`:lang()`, con Bodoni y Archivo al frente de cada pila para que los números y los nombres propios
en alfabeto latino conserven la tipografía de la marca dentro del texto CJK. También cambian el
interlineado, el tracking y el corte de línea, porque las reglas tipográficas latinas destrozan un
párrafo en kanji.

## Qué cambió respecto al sitio original

**Contenido: nada inventado.** Cada frase, cifra y nombre de producto viene del sitio original y
está registrado en `_source/CONTENT.md`. No hay clientes, certificaciones, plazos ni testimonios
que no estuvieran ya publicados.

A petición de los dueños, la familia propietaria no se nombra: la historia se conserva completa
—1847, la adquisición de 1977, la fundación de Novalan en 1983— pero sin el apellido.

Sí se corrigieron cuatro errores del sitio original, todos documentados:

1. La página de productos en español intercambiaba **peinada** (worsted) y **cardada** (woolen)
   respecto a su propia versión en inglés.
2. La página inglesa *Who We Are* tenía una frase incompleta —
   *"looking forward to protect and the people of communities in which we operate"* — y repetía la
   sección ambiental dos veces con viñetas duplicadas.
3. *San Idelfonso* → *San Ildefonso* en la página de inicio en español.
4. La página española de *Quiénes Somos* omitía una de las cinco acciones ambientales que sí
   traía la inglesa. Los siete idiomas dicen ahora lo mismo.

**Diseño.** El sitio anterior usaba una plantilla de 2014 con barra lateral fija y no era
responsivo. Ahora:

- Las 13 fotografías de tela en alta resolución que estaban escondidas como fondos dentro de
  `main.css` y nunca se veían completas, ahora son una cuadrícula real con visor ampliado.
- La historia se cuenta como línea de tiempo: 1847, 1977, 1983, hoy.
- Los 5 procesos son bloques editoriales numerados en lugar de bandas apiladas.
- El video corporativo abría en una ventana emergente; ahora es una portada que carga YouTube
  solo al hacer clic, así que la página no habla con Google hasta que tú se lo pides.
- Todas las imágenes se reprocesaron a WebP con respaldo JPEG, en dos tamaños.
- Tipografías servidas localmente, así que el sitio no depende de Google Fonts.

**Accesibilidad.** Enlace para saltar al contenido, marcas de región, un solo `<h1>` por página,
texto alternativo real en todas las imágenes, foco visible, contraste AA en el texto pequeño,
controles de 44 px, y modales de verdad para el menú móvil y el visor de telas. Todo el movimiento
se apaga con `prefers-reduced-motion`.

## Contacto

Novalan, S.A. de C.V.
Carr. Tulancingo-Huapalcalco #1510, Col. Caltengo, Tulancingo, Hidalgo, México, C.P. 43626
(52) 775-755-11-23 · (52) 775-753-03-89 · info@novalanfabrics.com.mx

## Créditos y licencia

El contenido, las fotografías y las marcas son propiedad de Novalan, S.A. de C.V. y de
San Ildefonso Fábrica de Tejidos de Lana, S.A. de C.V.; todos los derechos reservados. Las
tipografías Bodoni Moda, Archivo y Pinyon Script se distribuyen bajo SIL Open Font License 1.1.
