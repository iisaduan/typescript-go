package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestGoToImplementationInterfaceMethod_01(t *testing.T) {
	t.Parallel()

	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `interface Foo {
    hel/*declaration*/lo(): void;
    okay?: number;
}

class Bar implements Foo {
    [|hello|]() {}
    public sure() {}
}

function whatever(a: Foo) {
    a.he/*function_call*/llo();
}

whatever(new Bar());`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyBaselineGoToDefs(t, "GoToImplementation", "function_call", "declaration")
}
