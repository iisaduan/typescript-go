//// [tests/cases/conformance/types/typeRelationships/subtypesAndSuperTypes/subtypingWithGenericConstructSignaturesWithOptionalParameters.ts] ////

//// [subtypingWithGenericConstructSignaturesWithOptionalParameters.ts]
// call signatures in derived types must have the same or fewer optional parameters as the base type

module ClassTypeParam {
    interface Base<T> {
        a: new () => T;
        a2: new (x?: T) => T;
        a3: new (x: T) => T;
        a4: new (x: T, y?: T) => T;
        a5: new (x?: T, y?: T) => T;
    }

    interface I1<T> extends Base<T> {
        a: new () => T; // ok, same T of required params
    }

    interface I2<T> extends Base<T> {
        a: new (x?: T) => T; // ok, same T of required params
    }

    interface I3<T> extends Base<T> {
        a: new (x: T) => T; // error, too many required params
    }


    interface I4<T> extends Base<T> {
        a2: new () => T; // ok, same T of required params
    }

    interface I5<T> extends Base<T> {
        a2: new (x?: T) => T; // ok, same T of required params
    }

    interface I6<T> extends Base<T> {
        a2: new (x: T) => T; // ok, same number of params
    }


    interface I7<T> extends Base<T> {
        a3: new () => T; // ok, fewer required params
    }

    interface I8<T> extends Base<T> {
        a3: new (x?: T) => T; // ok, fewer required params
    }

    interface I9<T> extends Base<T> {
        a3: new (x: T) => T; // ok, same T of required params
    }

    interface I10<T> extends Base<T> {
        a3: new (x: T, y: T) => T;  // error, too many required params
    }


    interface I11<T> extends Base<T> {
        a4: new () => T; // ok, fewer required params
    }

    interface I12<T> extends Base<T> {
        a4: new (x?: T, y?: T) => T; // ok, fewer required params
    }

    interface I13<T> extends Base<T> {
        a4: new (x: T) => T; // ok, same T of required params
    }

    interface I14<T> extends Base<T> {
        a4: new (x: T, y: T) => T;  // ok, same number of params
    }


    interface I15<T> extends Base<T> {
        a5: new () => T; // ok, fewer required params
    }

    interface I16<T> extends Base<T> {
        a5: new (x?: T, y?: T) => T; // ok, fewer required params
    }

    interface I17<T> extends Base<T> {
        a5: new (x: T) => T; // ok, all present params match
    }

    interface I18<T> extends Base<T> {
        a5: new (x: T, y: T) => T;  // ok, same number of params
    }
}

module GenericSignaturesInvalid {

    // all of these are errors
    interface Base2 {
        a: new <T>() => T;
        a2: new <T>(x?: T) => T;
        a3: new <T>(x: T) => T;
        a4: new <T>(x: T, y?: T) => T;
        a5: new <T>(x?: T, y?: T) => T;
    }

    interface I1<T> extends Base2 {
        a: new () => T; 
    }

    interface I2<T> extends Base2 {
        a: new (x?: T) => T;
    }

    interface I3<T> extends Base2 {
        a: new (x: T) => T; 
    }


    interface I4<T> extends Base2 {
        a2: new () => T; 
    }

    interface I5<T> extends Base2 {
        a2: new (x?: T) => T
    }

    interface I6<T> extends Base2 {
        a2: new (x: T) => T;
    }


    interface I7<T> extends Base2 {
        a3: new () => T;
    }

    interface I8<T> extends Base2 {
        a3: new (x?: T) => T; 
    }

    interface I9<T> extends Base2 {
        a3: new (x: T) => T; 
    }

    interface I10<T> extends Base2 {
        a3: new (x: T, y: T) => T;  
    }


    interface I11<T> extends Base2 {
        a4: new () => T; 
    }

    interface I12<T> extends Base2 {
        a4: new (x?: T, y?: T) => T; 
    }

    interface I13<T> extends Base2 {
        a4: new (x: T) => T; 
    }

    interface I14<T> extends Base2 {
        a4: new (x: T, y: T) => T; 
    }


    interface I15<T> extends Base2 {
        a5: new () => T; 
    }

    interface I16<T> extends Base2 {
        a5: new (x?: T, y?: T) => T; 
    }

    interface I17<T> extends Base2 {
        a5: new (x: T) => T;
    }

    interface I18<T> extends Base2 {
        a5: new (x: T, y: T) => T; 
    }
}

module GenericSignaturesValid {

    interface Base2 {
        a: new <T>() => T;
        a2: new <T>(x?: T) => T;
        a3: new <T>(x: T) => T;
        a4: new <T>(x: T, y?: T) => T;
        a5: new <T>(x?: T, y?: T) => T;
    }

    // BUG 833350
    interface I1 extends Base2 {
        a: new <T>() => T; // ok, same number of required params
    }

    interface I2 extends Base2 {
        a: new <T>(x?: T) => T; // error, not identical and contextual signature instatiation can't make inference from T to T
    }

    interface I3 extends Base2 {
        a: new <T>(x: T) => T; // error, not identical and contextual signature instatiation can't make inference from T to T
    }


    interface I4 extends Base2 {
        a2: new <T>() => T; // error, not identical and contextual signature instatiation can't make inference from T to T
    }

    interface I5 extends Base2 {
        a2: new <T>(x?: T) => T; // ok, identical
    }

    interface I6 extends Base2 {
        a2: new <T>(x: T) => T; // ok, same number of params
    }


    interface I7 extends Base2 {
        a3: new <T>() => T; // ok, fewer required params
    }

    interface I8 extends Base2 {
        a3: new <T>(x?: T) => T; // error, no inferences for T so {} not assignable to {} in return type
    }

    interface I9 extends Base2 {
        a3: new <T>(x: T) => T; // ok, identical, same number of required params
    }

    interface I10 extends Base2 {
        a3: new <T>(x: T, y: T) => T;  // error, too many required params
    }


    interface I11 extends Base2 {
        a4: new <T>() => T; // error, not identical and contextual signature instatiation can't make inference from T to T
    }

    interface I12 extends Base2 {
        a4: new <T>(x?: T, y?: T) => T; // ok, fewer required params
    }

    interface I13 extends Base2 {
        a4: new <T>(x: T) => T; // ok, same T of required params
    }

    interface I14 extends Base2 {
        a4: new <T>(x: T, y: T) => T;  // ok, same number of params
    }


    interface I15 extends Base2 {
        a5: new <T>() => T; // error, not identical and contextual signature instatiation can't make inference from T to T
    }

    interface I16 extends Base2 {
        a5: new <T>(x?: T, y?: T) => T; // ok, fewer required params
    }

    interface I17 extends Base2 {
        a5: new <T>(x: T) => T; // ok, all present params match
    }

    interface I18 extends Base2 {
        a5: new <T>(x: T, y: T) => T;  // ok, same number of params
    }
}

//// [subtypingWithGenericConstructSignaturesWithOptionalParameters.js]
