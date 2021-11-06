//метод для фильтра контактов
export const onFilteredContacts = ({ items, filter }) => {
  //приводим текс к нижнему регистру и удаляем пробелы по бокам
  const normalizedFilter = filter.toLowerCase().trim();
  return items.filter(contact =>
    contact.name.toLowerCase().trim().includes(normalizedFilter),
  );
};
