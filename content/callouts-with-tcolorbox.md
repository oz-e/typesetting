---
title: Callouts with tcolorbox
---
For a variety of documents I've produced, I have made use of the `tcolorbox` package, which makes it easy to create callouts. Some examples are below

![[Pasted image 20260725102653.png]]

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

Unless you are adding code to your tcolorboxes, you probably don't need minted.

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


> [!INFO]
> At some point I will look into generalising this callout definition, so that the \newtcolorbox can be called "callout", and can accept arguments such as "info", "warning", etc.  

