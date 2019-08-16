# MutableArithmetics

[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://JuliaOpt.github.io/MutableArithmetics.jl/stable)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://JuliaOpt.github.io/MutableArithmetics.jl/dev)
[![Build Status](https://travis-ci.com/JuliaOpt/MutableArithmetics.jl.svg?branch=master)](https://travis-ci.com/JuliaOpt/MutableArithmetics.jl)
[![Build Status](https://ci.appveyor.com/api/projects/status/github/JuliaOpt/MutableArithmetics.jl?svg=true)](https://ci.appveyor.com/project/JuliaOpt/MutableArithmetics-jl)
[![Codecov](https://codecov.io/gh/JuliaOpt/MutableArithmetics.jl/branch/master/graph/badge.svg)](https://codecov.io/gh/JuliaOpt/MutableArithmetics.jl)
[![Coveralls](https://coveralls.io/repos/github/JuliaOpt/MutableArithmetics.jl/badge.svg?branch=master)](https://coveralls.io/github/JuliaOpt/MutableArithmetics.jl?branch=master)
[![Build Status](https://api.cirrus-ci.com/github/JuliaOpt/MutableArithmetics.jl.svg)](https://cirrus-ci.com/github/JuliaOpt/MutableArithmetics.jl)/MutableArithmetics.jl)

```julia
using BenchmarkTools
using MutableArithmetics
const MA = MutableArithmetics

n = 200
A = rand(-10:10, n, n)
b = rand(-10:10, n)
c = rand(-10:10, n)

# MA.mul works for arbitrary types
MA.mul(A, b)

A2 = big.(A)
b2 = big.(b)
c2 = big.(c)


println("Default performance: ")
trial = @benchmark MA.mul_to!($c2, $A2, $b2)
display(trial)

# Define MutableArithmetics API for numbers
MA.mutability(::Type{BigInt}, ::typeof(MA.zero!)) = MA.IsMutable()
MA.zero_impl!(x::BigInt) = Base.GMP.MPZ.set_si!(x, 0)
MA.mutability(::Type{BigInt}, ::typeof(MA.one!)) = MA.IsMutable()
MA.one_impl!(x::BigInt) = Base.GMP.MPZ.set_si!(x, 1)
MA.mutability(::Type{BigInt}, ::typeof(MA.mul_to!), ::Type{BigInt}, ::Type{BigInt}) = MA.IsMutable()
MA.mul_to_impl!(x::BigInt, a::BigInt, b::BigInt) = Base.GMP.MPZ.mul!(x, a, b)
MA.mutability(::Type{BigInt}, ::typeof(MA.add_to!), ::Type{BigInt}, ::Type{BigInt}) = MA.IsMutable()
MA.add_to_impl!(x::BigInt, a::BigInt, b::BigInt) = Base.GMP.MPZ.add!(x, a, b)
MA.muladd_buf_impl!(buf::BigInt, a::BigInt, b::BigInt, c::BigInt) = Base.GMP.MPZ.add!(a, Base.GMP.MPZ.mul!(buf, b, c))

println("MA performance after definining interface: ")
trial2 = @benchmark MA.mul_to!($c2, $A2, $b2)
display(trial2)
```
