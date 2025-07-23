package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestGoToSource5_sameAsGoToDef1(t *testing.T) {
	t.Parallel()

	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `// @Filename: /home/src/workspaces/project/a.ts
export const /*end*/a = 'a';
// @Filename: /home/src/workspaces/project/a.d.ts
export declare const a: string;
// @Filename: /home/src/workspaces/project/a.js
export const a = 'a';
// @Filename: /home/src/workspaces/project/b.ts
import { a } from './a';
[|a/*start*/|]`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyBaselineGoToDefs(t, "GoToSourceDefinition", "start")
	f.VerifyBaselineGoToDefs(t, "GoToDefinition", "start")
}
