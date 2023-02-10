{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'hyeon';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'hyeon',
    age: 20,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let hyeonName: Name;
  hyeonName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';
}
