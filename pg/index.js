const { createRoot, createComposite, renderStructure } = require('../functions/utility');
const { add, adopt, clone, eject, inject, remove, swap, updateData } = require('../functions/manipulators');
const {
  getConfig,
  getComposite,
  getRootCompositeEntities,
  getRootConfigEntities,
  getRootDataEntities,
} = require('../functions/getters');
const { Arrange } = require('../constants');

console.log('start');

{
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

  const dupe = clone(root, getComposite(root, twoOfMe.config.key), Arrange.AFTER);
  dupe.data.name += ' > i am duped and after';
  updateData(root, dupe);

  eject(root, getConfig(root, shouldBeRemoved.config.key));
  remove(root, getConfig(root, shouldBeRemoved.config.key));

  inject(root, getConfig(root, parent2.config.key), getConfig(root, parent3.config.key), Arrange.AFTER);

  /* console.log(
    renderStructure(root, (entity, level) => {
      return `${entity.data.name}, level: ${level}`;
    })
  ); */
}

{
  const root = createRoot();
  const parent1 = createComposite({ name: 'parent1' });
  const parent2 = createComposite({ name: 'parent2' });
  const parent3 = createComposite({ name: 'parent3' });
  const parent4 = createComposite({ name: 'parent4' });
  const child1 = createComposite({ name: 'child1' });
  const child2 = createComposite({ name: 'child2' });
  const child3 = createComposite({ name: 'child3' });
  const child4 = createComposite({ name: 'child4' });
  const child5 = createComposite({ name: 'child5' });
  add(root, parent1);
  add(root, parent2);
  add(root, parent3);
  add(root, parent4);
  add(root, child1, parent1.config);
  add(root, child2, parent1.config);
  add(root, child3, parent1.config);
  add(root, child4, parent1.config);
  add(root, child5, parent1.config);
  const dupe = clone(root, parent2, Arrange.BEFORE, true);
  dupe.data.name = 'new parent2';
  updateData(root, dupe);

  console.log(
    renderStructure(root, (entity, level) => {
      return `${entity.data.name}, level: ${level}`;
    })
  );

  // console.log(root);
  // console.log(getRootCompositeEntities(root));
  // console.log(getRootConfigEntities(root));
  // console.log(getRootDataEntities(root));
}

console.log('end');
