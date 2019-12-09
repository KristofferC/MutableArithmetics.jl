var documenterSearchIndex = {"docs":
[{"location":"#","page":"Home","title":"Home","text":"CurrentModule = MutableArithmetics\nDocTestSetup = quote\n    using MutableArithmetics\nend","category":"page"},{"location":"#MutableArithmetics.jl-1","page":"Home","title":"MutableArithmetics.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [MutableArithmetics]","category":"page"},{"location":"#MutableArithmetics._rewrite","page":"Home","title":"MutableArithmetics._rewrite","text":"_rewrite(vectorized::Bool, inner_factor, current_sum::Union{Nothing, Symbol}, left_factors::Vector, right_factors::Vector, new_var::Symbol=gensym())\n\nReturn new_var, code such that code is equivalent to\n\nnew_var = prod(left_factors) * inner_factor * prod(right_factors)\n\nif current_sum is nothing,\n\nnew_var = current_sum + prod(left_factors) * inner_factor * prod(right_factors)\n\nif current_sum is a Symbol and vectorized is false and\n\nnew_var = current_sum .+ prod(left_factors) * inner_factor * prod(right_factors)\n\notherwise.\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.add!-Union{Tuple{Vararg{Any,N}}, Tuple{N}} where N","page":"Home","title":"MutableArithmetics.add!","text":"add!(a, b, ...)\n\nReturn the sum of a, b, ..., possibly modifying a.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.add_mul","page":"Home","title":"MutableArithmetics.add_mul","text":"add_mul(a, args...)\n\nReturn a + *(args...). Note that add_mul(a, b, c) = muladd(b, c, a).\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.add_mul!-Union{Tuple{Vararg{Any,N}}, Tuple{N}} where N","page":"Home","title":"MutableArithmetics.add_mul!","text":"add_mul!(args...)\n\nReturn add_mul(args...), possibly modifying args[1].\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.add_mul_buf!-Union{Tuple{N}, Tuple{Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.add_mul_buf!","text":"add_mul_buf!(buffer, args...)\n\nReturn add_mul(args...), possibly modifying args[1] and buffer.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.add_mul_buf_to!-Union{Tuple{N}, Tuple{Any,Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.add_mul_buf_to!","text":"add_mul_buf_to!(buffer, output, args...)\n\nReturn add_mul(args...), possibly modifying output and buffer.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.add_mul_to!-Union{Tuple{N}, Tuple{Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.add_mul_to!","text":"add_mul_to!(output, args...)\n\nReturn add_mul(args...), possibly modifying output.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.add_to!-Union{Tuple{N}, Tuple{Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.add_to!","text":"add_to!(a, b, c)\n\nReturn the sum of b and c, possibly modifying a.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.broadcast!-Union{Tuple{N}, Tuple{Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.broadcast!","text":"broadcast!(op::Function, args...)\n\nReturns the value of broadcast(op, args...), possibly modifying args[1].\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.broadcast_mutability-Union{Tuple{N}, Tuple{Type,Any,Vararg{Type,N}}} where N","page":"Home","title":"MutableArithmetics.broadcast_mutability","text":"broadcast_mutability(T::Type, ::typeof(op), args::Type...)::MutableTrait\n\nReturn IsMutable to indicate an object of type T can be modified to be equal to broadcast(op, args...).\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.buffered_operate!-Union{Tuple{N}, Tuple{Any,Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.buffered_operate!","text":"buffered_operate!(buffer, op::Function, args...)\n\nReturns the value of op(args...), possibly modifying buffer.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.buffered_operate_to!-Union{Tuple{N}, Tuple{Any,Any,Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.buffered_operate_to!","text":"buffered_operate_to!(buffer, output, op::Function, args...)\n\nReturns the value of op(args...), possibly modifying buffer and output.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.iszero!-Tuple{Any}","page":"Home","title":"MutableArithmetics.iszero!","text":"iszero!(x)\n\nReturn a Bool indicating whether x is zero, possibly modifying x.\n\nExamples\n\nIn MathOptInterface, a ScalarAffineFunction may contain duplicate terms. In Base.iszero, duplicate terms need to be merged but the function is left with duplicates as it cannot be modified. If iszero! is called instead, the function will be canonicalized in addition for checking whether it is zero.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mul!-Union{Tuple{Vararg{Any,N}}, Tuple{N}} where N","page":"Home","title":"MutableArithmetics.mul!","text":"mul!(a, b, ...)\n\nReturn the product of a, b, ..., possibly modifying a.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mul_to!-Union{Tuple{N}, Tuple{Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.mul_to!","text":"mul_to!(a, b, c)\n\nReturn the product of b and c, possibly modifying a.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mutability-Union{Tuple{N}, Tuple{Type,Any,Vararg{Type,N}}} where N","page":"Home","title":"MutableArithmetics.mutability","text":"mutability(T::Type, ::typeof(op), args::Type...)::MutableTrait\n\nReturn IsMutable to indicate an object of type T can be modified to be equal to op(args...).\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mutable_broadcast!","page":"Home","title":"MutableArithmetics.mutable_broadcast!","text":"mutable_broadcast!(op::Function, args...)\n\nModify the value of args[1] to be equal to the value of broadcast(op, args...). Can only be called if mutability(args[1], op, args...) returns true.\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.mutable_buffered_operate!","page":"Home","title":"MutableArithmetics.mutable_buffered_operate!","text":"mutable_buffered_operate!(buffer, op::Function, args...)\n\nModify the value of args[1] to be equal to the value of op(args...), possibly modifying buffer. Can only be called if mutability(args[1], op, args...) returns true.\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.mutable_buffered_operate_to!-Union{Tuple{N}, Tuple{Nothing,Any,Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.mutable_buffered_operate_to!","text":"mutable_buffered_operate_to!(buffer, output, op::Function, args...)\n\nModify the value of output to be equal to the value of op(args...), possibly modifying buffer. Can only be called if mutability(output, op, args...) returns true.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mutable_operate!-Union{Tuple{N}, Tuple{Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.mutable_operate!","text":"mutable_operate!(op::Function, args...)\n\nModify the value of args[1] to be equal to the value of op(args...). Can only be called if mutability(args[1], op, args...) returns true.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mutable_operate_to!-Union{Tuple{N}, Tuple{Any,Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.mutable_operate_to!","text":"mutable_operate_to!(output, op::Function, args...)\n\nModify the value of output to be equal to the value of op(args...). Can only be called if mutability(output, op, args...) returns true.\n\nIf output === args[i] for some i,\n\nThe user should expect to get an error. operate! or mutable_operate! should be used instead.\nAny method not supporting this case should throw an error.\n\nFor instance, in DynamicPolynomials, mutable_operate_to!(p, +, p, q) throws an error because otherwise, the algorithm would fill p while iterating over the terms of p and q hence it will never terminate. On the other hand mutable_operate!(+, p, q) uses a different algorithm that efficiently inserts the terms of q in the sorted list of terms of p with minimal displacement.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.one!-Tuple{Any}","page":"Home","title":"MutableArithmetics.one!","text":"one!(a)\n\nReturn one(a), possibly modifying a.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.operate!-Union{Tuple{N}, Tuple{Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.operate!","text":"operate!(op::Function, args...)\n\nReturns the value of op(args...), possibly modifying args[1].\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.operate_to!-Union{Tuple{N}, Tuple{Any,Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.operate_to!","text":"operate_to!(output, op::Function, args...)\n\nReturns the value of op(args...), possibly modifying output.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.promote_operation","page":"Home","title":"MutableArithmetics.promote_operation","text":"promote_operation(op::Function, ArgsTypes::Type...)\n\nReturns the type returned to the call operate(op, args...) where the types of the arguments args are ArgsTypes.\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.rewrite_generator-Tuple{Any,Any}","page":"Home","title":"MutableArithmetics.rewrite_generator","text":"rewrite_generator(expr::Expr, inner::Function)\n\nRewrites the generator statements expr and returns a properly nested for loop with nested filters as specified.\n\nExamples\n\njulia> using MutableArithmetics\n\njulia> MutableArithmetics.rewrite_generator(:(i for i in 1:2 if isodd(i)), i -> :($i + 1))\n:(for $(Expr(:escape, :(i = 1:2)))\n      if $(Expr(:escape, :(isodd(i))))\n          i + 1\n      end\n  end)\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.zero!-Tuple{Any}","page":"Home","title":"MutableArithmetics.zero!","text":"zero!(a)\n\nReturn zero(a), possibly modifying a.\n\n\n\n\n\n","category":"method"}]
}
