shidokuGrid = method();
shidokuGrid List := L -> (
    R1 = for i from 0 to 3 list L_(i);
    R2 = for i from 0 to 3 list L_(4+i);
    R3 = for i from 0 to 3 list L_(8+i);
    R4 = for i from 0 to 3 list L_(12+i);
    matrix{R1,R2,R3,R4}
    )

--- a little method for printing shidokus nicely
shidokuSolution = method();
shidokuSolution List := L -> (
    R1 = for i from 0 to 3 list -1*((entries((coefficients (L_(15-i)))_1))_1_0);
    R2 = for i from 0 to 3 list -1*((entries((coefficients (L_(11-i)))_1))_1_0);
    R3 = for i from 0 to 3 list -1*((entries((coefficients (L_(7-i)))_1))_1_0);
    R4 = for i from 0 to 3 list -1*((entries((coefficients (L_(3-i)))_1))_1_0);
    matrix{R1,R2,R3,R4}
    )

--- First we make the puzzle space with the polynomial ring P
P = ZZ/8821[x_{1,1}..x_{1,4},x_{2,1}..x_{2,4},x_{3,1}..x_{3,4},x_{4,1}..x_{4,4}];
Vars = flatten entries vars P
--- Double check that there are 16 variables:
#Vars

--- Next: set up the rows, columns, and boxes variable lists 
Rows = for i from 1 to 4 list for j from 1 to 4 list x_{i,j}
Columns = for j from 1 to 4 list for i from 1 to 4 list x_{i,j};
Boxs = { ---"Boxes" is a protected symbol
     {x_{1,1},x_{1,2},x_{2,1},x_{2,2}},
     {x_{1,3},x_{1,4},x_{2,3},x_{2,4}}, 
     {x_{3,1},x_{3,2},x_{4,1},x_{4,2}},
     {x_{3,3},x_{3,4},x_{4,3},x_{4,4}}
     };

--- To generate our ideal we have to do a little technical junk,
---  please bear with me <♪ cue muzak ♪>
B = flatten {
apply(Rows, r -> product r - 24), --- making all the product polynomials for rows
apply(Rows, r -> sum r - 10), --- making all the sum polynomials for rows
apply(Columns, c -> product c - 24), --- and so on.
apply(Columns, c -> sum c - 10),
apply(Boxs, b -> product b - 24),
apply(Boxs, b -> sum b - 10),
apply(Vars, v -> (v-1)*(v-2)*(v-3)*(v-4)) --- setting the allowed values
};
--- Done constructing the puzzle relations!

--- In our Example game, we had a few more polynomials:
E = {x_{1,1} - 1, x_{2,4} - 4, x_{3,2} - 3, x_{3,3} - 2, x_{4,1} - 2};

--- Make the game ideal:
I = ideal( flatten join{B,E} )
((flatten mingens I)_32)_0 --- here's one of the generators of J:

--- Check some possible solutions:
isSubset(ideal(x_{1,2} - 3),I) -- x_{1,2} = 3?
isSubset(ideal(x_{1,2} - 4),I) -- x_{1,2} = 4?

#(primaryDecomposition I) --- how many solutions?
M = apply(primaryDecomposition I, J -> gens gb J); 
minI = minimalPrimes I
minI // first // gens
shidokuSolution(flatten entries (M_0))

--- A different example where we omit the "x_{2,4} - 4" relation.
E' = {x_{1,1} - 1, x_{3,2} - 3, x_{3,3} - 2, x_{4,1} - 2}
I' = ideal( flatten join{B,E'})
minI' = minimalPrimes I'
minI' / gens / entries / flatten / length
--- How many solutions?
1 == #(primaryDecomposition I') --- There isn't a unique solution!
Is = #(primaryDecomposition I')  --- In fact, there are three solutions.

S = apply(primaryDecomposition I', J -> gens gb J);
K = for i from 0 to s - 1 list flatten entries (S_i);
{shidokuSolution(K_0),shidokuSolution(K_1), shidokuSolution(K_2)}


---One last game where we add x_{4,2}-4 to E
E'' = {x_{1,1} - 1, x_{2,4} - 4, x_{3,2} - 3, x_{3,3} - 2, x_{4,1} - 2,x_{4,2}-4};

--- Make the game ideal:
I'' = ideal( flatten join{B,E''} )

--- How many solutions?
#(primaryDecomposition I'')

end

-------------------------------
restart 
load "shidoku.m2"

P
L = flatten entries vars P
shidokuGrid(L)
shidokuSolution(K_0)

B // VerticalList
I = ideal(flatten B, flatten E)
mingens ideal B



