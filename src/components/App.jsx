
import { useSelector } from 'react-redux';
import { AppWrap } from "./App.styled";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { toast, ToastContainer } from "react-toastify";
import PropTypes from "prop-types";
import { getIsLoading, getError } from 'redux/selectors';
import { Loader } from './Loader/Loader';

export function App() {
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  return (
    <>
      <AppWrap>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !isError && <Loader />}
        {isError && !isLoading && toast.error(isError)}
        <ContactList />
        <ToastContainer autoClose={3000} />
      </AppWrap>
    </>
  );
}

App.propTypes = {
  state: PropTypes.objectOf({
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  }),
};