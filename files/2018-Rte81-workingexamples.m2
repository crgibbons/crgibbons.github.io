needsPackage("BoijSoederberg")

phase1 = method();
phase1(List,ZZ) := (degs, deg) -> (
    B := makeCI(degs);
    postB := makeCI(append(degs,deg));
    E := sort apply( pairs eliminateBetti(B), p -> (p_1,p_0));
    D := decomposeDegrees(B);
    postD := apply(D, d -> append(d_1,deg+sum(degs)));
    newB := for i from 0 to length D-2 list (
    	postB = postB - postB#(E_i_1)/(pureBetti(postD_i))_((E_i)_1_0)*pureBettiDiagram(postD_i)
    	);
    newB
)

decompValues = method();
decompValues(List) := L -> (
    apply(L, decomp -> unique values decomp)
    )

popNegs = method();
popNegs(List,ZZ) := (degs, deg) -> (
    P := phase1(degs,deg);
    L := flatten apply(P, decomp -> unique values decomp);
    select(L, l -> l < 0)
    )

compareElimOrder = method();
compareElimOrder(List,List) := (E,EE) -> (
    n := min(#E, #EE);
    take(E,n) == take(EE,n)
    )

compareElimOrder(List,ZZ) := (degs,deg) -> (
    B := makeCI(degs);
    E := eliminateBetti(B,EliminationSequence => true);
    BB := makeCI(append(degs,deg));
    EE := eliminateBetti(BB,EliminationSequence => true);
    compareElimOrder(E,EE)
    )
    

end --

restart
load "2018-Rte81-workingexamples.m2"

B = makeCI({2,3,5})
BB = makeCI({2,3,5,11})
compareElimOrder({2,3,5},11)


B = makeCI({2,3,4,6})
BB = makeCI({2,3,4,6,23})
compareElimOrder({2,3,4,6},23)
compareElimOrder({2,3,4,6},157)

decompValues(phase1({2,3,4,6},23))
popNegs({2,3,4,6},23)
popNegs({2,3,4,6},157)
