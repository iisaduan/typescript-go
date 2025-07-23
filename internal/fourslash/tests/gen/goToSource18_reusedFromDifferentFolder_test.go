package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestGoToSource18_reusedFromDifferentFolder(t *testing.T) {
	t.Parallel()

	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `// @moduleResolution: node
// @Filename: /home/src/workspaces/project/node_modules/@types/yargs/package.json
{
    "name": "@types/yargs",
    "version": "1.0.0",
    "types": "./index.d.ts"
}
// @Filename: /home/src/workspaces/project/node_modules/@types/yargs/callback.d.ts
export declare class Yargs { positional(): Yargs; }
// @Filename: /home/src/workspaces/project/node_modules/@types/yargs/index.d.ts
import { Yargs } from "./callback";
export declare function command(command: string, cb: (yargs: Yargs) => void): void;
// @Filename: /home/src/workspaces/project/node_modules/yargs/package.json
{
    "name": "yargs",
    "version": "1.0.0",
    "main": "index.js"
}
// @Filename: /home/src/workspaces/project/node_modules/yargs/callback.js
export class Yargs { positional() { } }
// @Filename: /home/src/workspaces/project/node_modules/yargs/index.js
// Specifically didnt have ./callback import to ensure that resolving module sepcifier adds the file to project at later stage
export function command(cmd, cb) { cb(Yargs) }
// @Filename: /home/src/workspaces/project/folder/random.ts
import { Yargs } from "yargs/callback";
// @Filename: /home/src/workspaces/project/some/index.ts
import { random } from "../folder/random";
import { command } from "yargs";
command("foo", yargs => {
    yargs.[|/*start*/positional|]();
});`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyBaselineGoToDefs(t, "GoToSourceDefinition", "start")
}
