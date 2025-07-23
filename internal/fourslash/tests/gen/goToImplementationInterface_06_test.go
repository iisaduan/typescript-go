package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestGoToImplementationInterface_06(t *testing.T) {
	t.Parallel()

	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `interface Fo/*interface_definition*/o {
    new (a: number): SomeOtherType;
}

interface SomeOtherType {}

let x: Foo = [|class { constructor (a: number) {} }|];
let y = <Foo> [|class { constructor (a: number) {} }|];`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyBaselineGoToDefs(t, "GoToImplementation", "interface_definition")
}
