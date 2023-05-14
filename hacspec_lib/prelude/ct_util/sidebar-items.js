window.SIDEBAR_ITEMS = {"fn":[["cadd","Add two numerics if condition `c` is set (all bits 1). Returns `x` if condition `c` is `0`. Note: Addition is always wrapping."],["cmul","Multiply two numerics if condition `c` is set (all bits 1). Returns `x` if condition `c` is `0`. Note: Multiplication is always wrapping."],["cset_bit","Set bit at position `i` in `x` to `b` if `c` is all 1 and return the restult. Returns `x` if `c` is `0`."],["csub","Subtract two numerics if condition `c` is set (all bits 1). Returns `x` if condition `c` is `0`. Note: Addition is always wrapping."],["cswap","Conditional, constant-time swapping. Returns `(x, y)` if `c == 0` and `(y, x)` if `c == T::max`. The return value is undefined if `c` has any other value."],["cswap_bit","Conditional, constant-time swapping. Returns `(x, y)` if `c == 0` and `(y, x)` if `c == 1`."],["ct_div","Constant time division for Numerics. Note that this function is only constant time if `T` is a secret integer and hence provides constant time implementations for the used functions."]]};