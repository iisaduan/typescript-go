package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestGoToImplementationInterfaceMethod_08(t *testing.T) {
	t.Parallel()

	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `interface Foo {
    hello (): void;
}

class SuperBar implements Foo {
   [|hello|]() {}
}

class Bar extends SuperBar {
   whatever() { this.he/*function_call*/llo(); }
}

class SubBar extends Bar {
   [|hello|]() {}
}`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyBaselineGoToDefs(t, "GoToImplementation", "function_call")
}
