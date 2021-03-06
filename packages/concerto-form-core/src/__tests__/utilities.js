/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const Utilities = require('../lib/utilities');

describe('Utilities', function () {
    describe('#normalizeLabel', function () {
        it('accepts camelCase', async function () {
            expect(Utilities.normalizeLabel('camelCase')).toEqual('Camel Case');
        });
        it('accepts camelABCCase', async function () {
            expect(Utilities.normalizeLabel('camelABCCase')).toEqual('Camel ABC Case');
        });
        it('accepts CamelCase', async function () {
            expect(Utilities.normalizeLabel('CamelCase')).toEqual('Camel Case');
        });
    });
});
