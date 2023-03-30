import { useSelector } from "react-redux";
import { AppWrap, TitleWrap } from "./Phonebook.styled";
import { ContactForm } from "components/ContactForm";
import { ContactList } from "components/ContactList";
import { Filter } from "components/Filter";
import { toast, ToastContainer } from "react-toastify";
import { getIsLoading, getError } from "redux/contacts/selectors";
import { Loader } from "components/Loader/Loader";

export default function Phonebook() {
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  return (
    <>
      <AppWrap>
        <TitleWrap>Phonebook</TitleWrap>
        <ContactForm />
        <TitleWrap>Contacts</TitleWrap>
        <Filter />
        {isLoading && !isError && <Loader />}
        {isError && !isLoading && toast.error(isError)}
        <ContactList />
        <ToastContainer autoClose={3000} />
      </AppWrap>
    </>
  );
}
