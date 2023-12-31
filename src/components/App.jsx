import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import style from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { errorSelector, isLoadingSelector } from "../redux/selectors";
import { useEffect } from "react";
import { getAllContacts } from "../redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <section className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm></ContactForm>
      {isLoading && !error && <b>Request in progress...</b>}
      <h1 className={style.subtitle}>Contacts</h1>
      <Filter></Filter>
      <ContactList></ContactList>
    </section>
  );
};
