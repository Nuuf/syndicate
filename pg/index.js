const { createRoot, createComposite, renderStructure } = require('../functions/utility');
const { add, adopt, clone, eject, inject, remove, swap, update } = require('../functions/manipulators');
const {
  getConfig,
  getComposite,
  getRootCompositeEntities,
  getRootConfigEntities,
  getRootDataEntities,
} = require('../functions/getters');
const { Arrange } = require('../constants');
const root = createRoot();
const parent1 = createComposite({ name: 'parent 1' });
const parent2 = createComposite({ name: 'parent 2' });
const parent3 = createComposite({ name: 'parent 3' });
const child1 = createComposite({ name: 'child 1' });
const child2 = createComposite({ name: 'child 2' });
const child3 = createComposite({ name: 'child 3' });
const child1SiblingBefore = createComposite({ name: 'child 1 sibling before' });
const child1SiblingAfter = createComposite({ name: 'child 1 sibling after' });
const twoOfMe = createComposite({ name: 'there should be two of me' });
const shouldBeRemoved = createComposite({ name: 'does not matter' });

add(root, parent2);
add(root, parent1);
add(root, parent3);
add(root, child1);
add(root, child2);
add(root, child3);
add(root, child1SiblingBefore);
add(root, child1SiblingAfter);
add(root, twoOfMe);
add(root, shouldBeRemoved);

swap(root, getConfig(root, parent1.config.key), getConfig(root, parent2.config.key));

adopt(root, getConfig(root, child1.config.key), getConfig(root, parent1.config.key));
adopt(root, getConfig(root, child2.config.key), getConfig(root, parent2.config.key));
adopt(root, getConfig(root, child3.config.key), getConfig(root, parent3.config.key));

adopt(root, getConfig(root, shouldBeRemoved.config.key), getConfig(root, parent3.config.key));

inject(root, getConfig(root, child1SiblingBefore.config.key), getConfig(root, child1.config.key));
inject(root, getConfig(root, child1SiblingAfter.config.key), getConfig(root, child1.config.key), Arrange.AFTER);

const dupe = clone(root, getComposite(root, twoOfMe.config.key));
dupe.data.name += ' > i am duped';
update(root, dupe);

eject(root, getConfig(root, shouldBeRemoved.config.key));
remove(root, getConfig(root, shouldBeRemoved.config.key));

console.log(
  renderStructure(root, (entity, level) => {
    return `${entity.data.name}, level: ${level}`;
  })
);

console.log(getRootCompositeEntities(root));
console.log(getRootConfigEntities(root));
console.log(getRootDataEntities(root));
