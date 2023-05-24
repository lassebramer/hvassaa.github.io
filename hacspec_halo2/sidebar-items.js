window.SIDEBAR_ITEMS = {"fn":[["add_polyx","Add two polynomials, return resulting polynomial"],["add_scalar_polyx","Add a scalar (constant) from a polynomial, return resulting polynomial"],["calculate_L_or_R","Auxilary function for computing L_j or R_j in step 24"],["check_not_zero","Checks if all entries in a polynomial is 0"],["commit_polyx","Pedersen vector commitment (1.3 in protocol)"],["compute_h","Compute the h(x) polynomial, used in step 4 and 13"],["compute_vanishing_polynomial","Compute vanishing polynomial over n-order multiplicative subgroup H with root of unity omega"],["divide_leading_terms","divide the leading terms of two polynomials, returning a single term (e.g. 5x^3) represented as a polynomial (helper function for divide_poly)"],["divide_poly","Perform polynomial long division, returning the quotient and the remainder. The algorithm is from https://en.wikipedia.org/wiki/Polynomial_long_division."],["eval_multi_poly","Evaluate a multivariate polynomials and return the evaluation"],["eval_polyx","Evaluate a polynomial at point, return the evaluation"],["halo2",""],["inner_product","Inner product, between to equal length vectors of field elements"],["legrange_basis","Finds the legrange basis for a set of `points` and a single evaluation point `x` This will produce a polynomial that evaluates to 1 at `x`and to 0 at all other x-values in the set `points` No other guarentees are given about the resulting polynomial"],["legrange_poly","Find lowest degree polynomial passing through a set points using legrange interpolation"],["msm","Multiscalar multiplicatoin, auxiliary function for Pedersen vector commitment"],["mul_polyx","Polynomial multiplication using sparse multiplication. This can be more efficient than operand scanning but also prone to side-channel attacks. Mostly copied from hacspec’s poly_mul"],["mul_scalar_polyx","Multiply a polynomial by a scalar, return resulting polynomial"],["multi_poly_with_x",""],["multi_poly_with_x_pow",""],["multi_to_uni_poly","Evaluate a multivariate polynomial in variables such that it becomes a univariate polynomial (1.1 in protocol) (univaraite polynomial represented as a sequence of field elements, where entry i, has degree i in the variable and the coefficient is the entry)"],["multiply_poly_by_single_term","Multiply a polynomial with a single term (e.g. 5x^3), with the single term represented as a polynomial. Returns the product. (helper function for divide_poly)"],["poly_degree","Get the degree of a polynomial"],["reduce_multi_poly","Evaluate a polynomial in some specified variables and return the new multivariate polynomial"],["reduce_multi_term","Evaluate a term with specified variable inputs Helper function for reduce_multi_poly"],["rotate_polyx",""],["sigma","Implementation of the σ mapping from the protocol"],["step_1",""],["step_10","Step 10 This functions initializes the s sequence of length n_a and fills it with polynomials of degree n_e-1 made with legrange interpolation"],["step_11","Step 11 Get the list of Q’s (Q_0, …, Q_{n_q - 1})"],["step_12","Step 12 Get the list of q’s (q_0, …, q_{n_q - 1})"],["step_13","Step 13 Get the list of r’s (r_0, …, r_{n_q - 1})"],["step_14","Step 14 Get the commitment Q’"],["step_15","This function emulates sending a challenge. It takes a challenge and returns it again."],["step_16","Step 16 Get the u ∈ F^{n_q} vector"],["step_17","This function emulates sending a challenge. It takes a challenge and returns it again."],["step_18","Arguments"],["step_19","Step 19 Get the p(X) polynomial"],["step_2",""],["step_20","Step 20"],["step_21","Step 21"],["step_22","Step 22 Get the P’ curve-point/group-element"],["step_23","Step 23 Get the p’(X) polynomial"],["step_24","Step 24"],["step_25","Step 25"],["step_26","Varifiers final check of the protocol"],["step_3",""],["step_4","Step 4 Beginning of the vanishing argument"],["step_5","Step 5 split polynomial of degree n_g(n-1)-n up into n_(g-2) polynomials of degree at most n-1"],["step_6","Step 6"],["step_7","Step 7 Computes the sum from step 7 in the protocol description"],["step_8","Step 8 This functions calculates h’(X) from the h_i parts created in step 5 and the challenge x"],["step_9","Step 9 This functions returns r(x) and creates a seq filled with a_i from the second part of step 9"],["sub_polyx","Subtract two polynomials, return resulting polynomial"],["sub_scalar_polyx","Subtract a scalar (constant) from a polynomial, return resulting polynomial"],["trim_poly","Trim a polynomial of trailing zeros (zero-terms) and return it"]],"struct":[["PublicParams","A struct for the public parameters, pp Since the group and field is currently fixed, only G, U, W is represented"]],"type":[["CRS","Common Reference Struct"],["InputVar","A representation of input variable in multivariate polynomial"],["Term","A term in a multivariate polynomial"]]};