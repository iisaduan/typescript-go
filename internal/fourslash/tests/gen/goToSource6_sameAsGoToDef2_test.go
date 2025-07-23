package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestGoToSource6_sameAsGoToDef2(t *testing.T) {
	t.Parallel()

	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `// @Filename: /home/src/workspaces/project/node_modules/foo/package.json
{ "name": "foo", "version": "1.2.3", "typesVersions": { "*": { "*": ["./types/*"] } } }
// @Filename: /home/src/workspaces/project/node_modules/foo/src/a.ts
export const /*end*/a = 'a';
// @Filename: /home/src/workspaces/project/node_modules/foo/types/a.d.ts
export declare const a: string;
//# sourceMappingURL=a.d.ts.map
// @Filename: /home/src/workspaces/project/node_modules/foo/types/a.d.ts.map
{"version":3,"file":"a.d.ts","sourceRoot":"","sources":["../src/a.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,EAAE,OAAO,CAAC;;AACvB,wBAAsB"}
// @Filename: /home/src/workspaces/project/node_modules/foo/dist/a.js
export const a = 'a';
// @Filename: /home/src/workspaces/project/b.ts
import { a } from 'foo/a';
[|a/*start*/|]`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyBaselineGoToDefs(t, "GoToSourceDefinition", "start")
	f.VerifyBaselineGoToDefs(t, "GoToDefinition", "start")
}
