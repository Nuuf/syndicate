/**
 * Updates an entity in a list
 *
 */
export function update(list, entity) {
  checkObject(entity);

  list[entity.index] = JSON.stringify(entity);
}
