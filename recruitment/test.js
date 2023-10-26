function value<T>(arg: T): T {

    return arg
    
    }
    
    let op_1 = value<string>("Demo")
    
    let op_2 = value<number>( 21 )
    
    console.log(op_1)
    
    console.log(op_2)
    