package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestGoToSource15_bundler(t *testing.T) {
	t.Parallel()

	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `// @Filename: /home/src/workspaces/project/tsconfig.json
{ "compilerOptions": { "module": "esnext", "moduleResolution": "bundler" } }
// @Filename: /home/src/workspaces/project/node_modules/react/package.json
{ "name": "react", "version": "16.8.6", "main": "index.js" }
// @Filename: /home/src/workspaces/project/node_modules/react/index.js
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
// @Filename: /home/src/workspaces/project/node_modules/react/cjs/react.production.min.js
'use strict';exports./*production*/useState=function(a){};exports.version='16.8.6';
// @Filename: /home/src/workspaces/project/node_modules/react/cjs/react.development.js
'use strict';
if (process.env.NODE_ENV !== 'production') {
  (function() {
    function useState(initialState) {}
    exports./*development*/useState = useState;
    exports.version = '16.8.6';
  }());
}
// @Filename: /home/src/workspaces/project/index.ts
import { [|/*start*/useState|] } from 'react';`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyBaselineGoToDefs(t, "GoToSourceDefinition", "start")
}
