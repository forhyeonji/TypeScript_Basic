/**
 * record type 은 map 과 비슷하게
 * 하나와 하나를 연결하고 싶을때!
 * Record<key, value> 가 된다.
 */

type PageInfo = {
  title: string;
};
type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  home: { title: 'Home' },
  about: { title: 'About' },
  contact: { title: 'Contact' },
};

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog' 대문자로 전환
