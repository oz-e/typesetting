---
title: Using tabularray to create tables in LaTeX
---
It's unfortunate that tabularray, as of the last time I checked (December 2025) was going to become an unmaintained package, as the then maintainer shared that they would no longer maintain it. While it still works, I wanted to show you a simple example of what I was able to do with it, as well as tell you why it's so good.

![[tabularray-table.svg]]
  

# Code

This table was created using the following code:

```latex
\begin{table}[h]
	\caption{Components of the Banana}
	\centering
	\begin{tblr}{
			rows = {font=\sffamily},
			hline{3-4} = {.5pt, black},
			vline{2}={.5pt},
			row{odd} = {bg=Gold!20},
			row{1} = {bg=Gold, font=\bfseries\sffamily}
		}
		Component	& Description \\
		First Row & Does this thing \\
		Second Row & Does this thing \\
		Third Row & Does this thing \\
	\end{tblr}
\end{table}
```

Fortunately, the package is fairly self explanatory, at least initially. The codeblock begins with the definition of a table with a caption. The styling of the caption is custom, and I may go into how I defined it in another post. Focusing on the table, we have a header row that is a deep yellow/gold. The third row is a lighter tint of this yellow. The other rows are white.

That probably sounds abitrary. One might think that, for such a small table, it is easy to specify that the top row should be bold, and the row should be coloured yellow. Without tabularray you are likely looking to define a new cell style, or add `\textbf{:latex}` to each cell manually, and specify a `\rowcolor` too.

With `tabularray`'s `tblr`, we can declare styles. We can say that for every row, specified with `rows={}`, the font family should be sans serif (`\sffamily`). Then we decide that we would like horizontal lines in rows 3 onwards, so we set `hline{3-4} = {.5pt, black}`, and similar for the vertical line in the middle.

I haven't yet figured out how to say "apply this style" from this row or this column onwards like you can in Beamer.

If however you were populating this table using external data, and/or using a loop, it may be a little harder to specify a style for alternate rows. You can, however, easily set rows colours in tabularray using `row{odd} = {bg=Gold!20}` to specify that odd rows should have a certain colour. The first row, since this is a 1-index system, is odd, and we have to specify `row{1} = {bg=Gold}` to apply a more prominent colour to it.

That's all there is to it. If you wanted to isolate the content even more, you could load in the table rows as external content, perhaps a CSV file.

# What could we add?

There are several aspects I want to look into at some point. Firstly, how can I add enumeration to the table? If I wanted each row (except the header row) to be numbered. Additionally, how would formatting work if we had multiple header rows? Think of a table with two rows, the first column merges those two rows and the rest of the the columns have separate rows, but both are still header rows.

![[block-table-idea.png]]

Now, this diagram was made using DrawIO. I would need to see if there is a way to define a group of rows as header rows, or just see how the system handles this scenario, and also read the documentation.