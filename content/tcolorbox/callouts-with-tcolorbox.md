---
title: Callouts with tcolorbox
---
For a variety of documents I've produced, I have made use of the `tcolorbox` package, which makes it easy to create callouts. Some examples are below.

![[../images/callout-both.png]]


Example use:

```latex
\begin{callout-info}
	This is an information callout box
\end{callout-info}	
```

You will need at least the following in your preamble:

```latex
\usepackage[style=solid]{fontawesome7} % fontawesome icons
\usepackage{tcolorbox}
\tcbuselibrary{skins,minted,breakable} % additional tcolorbox functionality
```

Unless you are adding [[codeblocks-with-tcolorbox|code to your tcolorboxes]], you probably don't need minted.

# Callout with icon

![[../images/callout-info.png]]

Here is the definition for an information box:

```latex
\newtcolorbox{callout-info}{
	enhanced,breakable,
	colback=SteelBlue!0!white, colframe=SteelBlue, arc=9pt,
	fonttitle=\bfseries, boxrule=1.5pt, leftrule=25pt,
	left=2mm, fontupper=\sffamily,
	overlay unbroken={%
		\node[anchor=west,text=white, inner sep=0mm] 
		at ([xshift=-6.25mm]interior.west) {\faIcon{circle-info}};},
	overlay first={%
		\node[anchor=west,text=white, inner sep=0mm] 
		at ([xshift=-6.25mm]interior.west) {\faIcon{circle-info}};}
}
```

- We need to apply `enhanced` and `breakable` to customise our overlay, and allow the box to be broken across pages, rather than being treated as a float.
- Simple styling is applied by defining the background color for the box (`colback={}`), the color of the frame (`colframe={}`), the roundedness of the box's outer edge (`arc={}`)
- Fonts are specified for the "upper" part of a tcolorbox using `fontupper=\sffamily{:latex}`
- We define two types of overlay, one for the "unbroken" case and one for the "first case". More about that in a paragraph below
- The "overlay" we add in each case is the same, but in an unbroken case we simply say where want the icon to be. In the broken case, we specify that the first part of the broken box should contain the icon, rather than repeating/breaking the overlay after each breakpoint.

## Breakable tcolorbox

- "unbroken" refers to a tcolorbox that doesn't break into pieces across multiple pages. When applying "breakable" we say "it's ok to split this box" rather than it being treated as one big float. Doing so can be an issue with longer callouts, or callouts near the end of a page's margin.
- "overlay first" refers to the first part of a broken tcolorbox. Say we have a particularly (questionably) large tcolorbox that is broken across 3 pages

## Future generalisation

At some point I will look into generalising this callout definition, so that the \newtcolorbox can be called "callout", and can accept arguments such as "info", "warning", etc. In the meantime, for other callout styles, I have simply repeated the definition, changing the icon used, possibly requiring an adjusting of the `xshift` value, and adjusting the colour as desired, e.g. a soft red for an alert/danger box.

# Callout with floating title

![[../images/callout-big.png]]

Here is the code for the callout with a floating title:

```latex
\newtcolorbox{callout-big}[2][]{
	enhanced,breakable,
	colback=Red!0!white, colframe=Red!50, arc=9pt,
	fonttitle=\bfseries, boxrule=2pt, leftrule=25pt,
	left=2mm, fontupper=\sffamily,
	enhanced, leftrule=7pt, bottomrule=7pt, top=1mm,
	title={#2},
	attach boxed title to top left=
	{xshift=4mm,yshift=0.5mm},
	boxed title style={size=small,colback=white,colframe=white,boxrule=0pt,arc=0pt},
	coltitle=Navy,fonttitle=\bfseries\Large\sffamily,
	breakable,
	#1
}
```

There isn't much different between this and the previous box, so I'll focus on the differences. Firstly,

## Future enhancements

The text I include in the example image at the start of the article for the callout with a floating title mentions a few features of this callout from the textbook I saw these callouts in originally. In that textbook, the callouts were used to hold large amounts of text, usually splitting across pages. There were also several aspects of these callouts that interested me, beyond what I have described in the [[#Callout with floating title|previous section]]:

- The box border runs into the margin, while the inner text stays the same width as surrounding unboxed text
- The thicker part of the the box border would always point to the outer edge of the page.