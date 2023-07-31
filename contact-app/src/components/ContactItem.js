const ContactItem = (props) => {
  return (
    <li>
      {props.contactItem.name}
      <br></br>
      {props.contactItem.email}
      <hr />
    </li>
  );
};
export default ContactItem;
