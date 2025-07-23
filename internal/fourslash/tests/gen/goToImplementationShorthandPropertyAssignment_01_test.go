package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestGoToImplementationShorthandPropertyAssignment_01(t *testing.T) {
	t.Parallel()

	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = ` interface Foo {
     someFunction(): void;
 }

 interface FooConstructor {
     new (): Foo
 }

 interface Bar {
     Foo: FooConstructor;
 }

 // Class expression that gets used in a bar implementation
 var x = class [|Foo|] {
     createBarInClassExpression(): Bar {
         return {
             Foo
         };
     }

     someFunction() {}
 };

 // Class declaration that gets used in a bar implementation. This class has multiple definitions
 // (the class declaration and the interface above), but we only want the class returned
 class [|Foo|] {

 }

 function createBarUsingClassDeclaration(): Bar {
     return {
         Foo
     };
 }

 // Class expression that does not get used in a bar implementation
 var y = class Foo {
     someFunction() {}
 };

 createBarUsingClassDeclaration().Fo/*reference*/o;`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyBaselineGoToDefs(t, "GoToImplementation", "reference")
}
