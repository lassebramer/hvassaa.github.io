var searchIndex = JSON.parse('{\
"hacspec_halo2":{"doc":"","t":[6,6,3,6,5,11,11,5,5,5,5,5,5,5,5,11,5,5,11,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,11,11,11],"n":["CRS","InputVar","PublicParams","Term","add_polyx","borrow","borrow_mut","calculate_L_or_R","check_not_zero","commit_polyx","compute_h","divide_leading_terms","divide_poly","eval_multi_poly","eval_polyx","from","halo2","inner_product","into","legrange_basis","legrange_poly","msm","mul_scalar_polyx","multi_poly_with_x","multi_to_uni_poly","multiply_poly_by_single_term","poly_degree","reduce_multi_poly","reduce_multi_term","sigma","step_1","step_10","step_11","step_12","step_13","step_14","step_15","step_16","step_17","step_18","step_19","step_2","step_20","step_21","step_22","step_23","step_24","step_25","step_26","step_3","step_4","step_5","step_6","step_7","step_8","step_9","sub_polyx","sub_scalar_polyx","trim_poly","try_from","try_into","type_id"],"q":["hacspec_halo2","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Common Reference Struct","A representation of input variable in multivariate …","A struct for the public parameters, pp Since the group and …","A term in a multivariate polynomial","Add two polynomials, return resulting polynomial","","","Auxilary function for computing L_j or R_j in step 24","Checks if all entries in a polynomial is 0","Pedersen vector commitment (1.3 in protocol)","Compute the h(x) polynomial, used in step 4 and 13","divide the leading terms of two polynomials, returning a …","Perform polynomial long division, returning the quotient …","Evaluate a multivariate polynomials and return the …","Evaluate a polynomial at point, return the evaluation","Returns the argument unchanged.","","Inner product, between to equal length vectors of field …","Calls <code>U::from(self)</code>.","Finds the legrange basis for a set of <code>points</code> and a single …","Find lowest degree polynomial passing through a set points …","Multiscalar multiplicatoin, auxiliary function for …","Multiply a polynomial by a scalar, return resulting …","","Evaluate a multivariate polynomial in variables such that …","Multiply a polynomial with a single term (e.g. 5x^3), with …","Get the degree of a polynomial","Evaluate a polynomial in some specified variables and …","Evaluate a term with specified variable inputs Helper …","Implementation of the σ mapping from the protocol","","","Step 11 Get the list of Q’s (Q_0, …, Q_{n_q - 1})","Step 12 Get the list of q’s (q_0, …, q_{n_q - 1})","Step 13 Get the list of r’s (r_0, …, r_{n_q - 1})","Step 14 Get the commitment Q’","","Step 16 Get the u ∈ F^{n_q} vector","","","Step 19 Get the p(X) polynomial","","","","Step 22 Get the P’ curve-point/group-element","Step 23 Get the p’(X) polynomial","Step 24 Get the p’(X) polynomial","","Varifiers final check of the protocol","","","Step 5 split polynomial of degree n_g(n-1)-n up into n_…","Step 6","Step 7 Computes the sum from step 7 in the protocol …","TODO document","Step 9 This functions creates a seq filled with a_i from …","Subtract two polynomials, return resulting polynomial","Subtract a scalar (constant) from a polynomial, return …","Trim a polynomial of trailing zeros (zero-terms) and …","","",""],"i":[0,0,0,0,0,9,9,0,0,0,0,0,0,0,0,9,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9],"f":[0,0,0,0,[[[2,[1]],[2,[1]]],[[2,[1]]]],[[]],[[]],[[[2,[1]],[2,[1]],[2,[3]],1,3,3],3],[[[2,[1]]],4],[[[2,[1]],1],3],[[[2,[1]]],[[2,[1]]]],[[[2,[1]],[2,[1]]],[[2,[1]]]],[[[2,[1]],[2,[1]]]],[[2,[2,[1]]],1],[[[2,[1]],1],1],[[]],[[]],[[[2,[1]],[2,[1]]],1],[[]],[[2,1],[[2,[1]]]],[2,[[2,[1]]]],[[[2,[1]],[2,[3]]],3],[[[2,[1]],1],[[2,[1]]]],[[[2,[1]]],[[2,[1]]]],[[2,2],[[2,[1]]]],[[[2,[1]],[2,[1]]],[[2,[1]]]],[[[2,[1]]],5],[[2,2],2],[[2,6]],[[5,2],[[2,[5]]]],[[]],[[]],[[5,5,1,3,3,[2,[3]],2],[[2,[3]]]],[[5,5,1,[2,[1]],[2,[1]],[2,[[2,[1]]]],2],[[2,[[2,[1]]]]]],[[5,5,1,[2,[1]],[2,[[2,[1]]]],2,[2,[[2,[1]]]]],[[2,[[2,[1]]]]]],[[1,5,5,[2,[[2,[1]]]],[2,[[2,[1]]]],[2,[[2,[5]]]],1],3],[[]],[[5,1,[2,[[2,[1]]]]],[[2,[1]]]],[[]],[[]],[[1,[2,[1]],[2,[[2,[1]]]]],[[2,[1]]]],[[]],[[]],[[]],[[3,3,3,1,1],3],[[[2,[1]],[2,[1]],1,1],[[2,[1]]]],[[[2,[1]],[2,[3]],1,1,3,3,5,6],[[2,[1]]]],[[]],[[[2,[1]],[2,[3]],3,[2,[3]],1,3,1,1,3,1,3],4],[[]],[[]],[[[2,[1]],5],[[2,[[2,[1]]]]]],[[[2,[[2,[1]]]],[2,[1]]],[[2,[3]]]],[[[2,[3]],1,5],3],[[[2,[[2,[1]]]],1,5],[[2,[1]]]],[[[2,[[2,[1]]]],6,1,1],[[2,[[2,[1]]]]]],[[[2,[1]],[2,[1]]],[[2,[1]]]],[[[2,[1]],1],[[2,[1]]]],[[[2,[1]]],[[2,[1]]]],[[],7],[[],7],[[],8]],"p":[[3,"Fp"],[3,"Seq"],[6,"G1"],[15,"bool"],[15,"u128"],[15,"usize"],[4,"Result"],[3,"TypeId"],[3,"PublicParams"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};