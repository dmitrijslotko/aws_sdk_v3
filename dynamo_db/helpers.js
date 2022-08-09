get_expression_attribute_names = (attributes) => {
  let attribute_list = {};
  for (const attribute of attributes) {
    attribute_list[`#${attribute}`] = attribute;
  }
  return attribute_list;
};

get_update_expression = (attributes) => {
  let str = "set ";
  for (const attribute of attributes) {
    str += `#${attribute} = :${attribute},`;
  }
  str = str.substring(0, str.length - 1);
  return str;
};

get_expression_attribute_values = (obj, attributes) => {
  let attribute_list = {};
  for (const attribute of attributes) {
    attribute_list[`:${attribute}`] = obj[attribute];
  }
  return attribute_list;
};

exports.dynamodb_helpers = {
  get_expression_attribute_names,
  get_update_expression,
  get_expression_attribute_values,
};
