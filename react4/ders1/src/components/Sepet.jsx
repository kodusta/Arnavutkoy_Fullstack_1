import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
const Sepet = (props) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Sepet - {props.sepet.length}
      </DropdownToggle>
      <DropdownMenu end>
        {props.sepet.map((urun) => (
          <DropdownItem key={urun.urun.id}>
            <button
              style={{ cursor: "pointer", marginRight: "5px" }}
              onClick={() => props.sepetguncelle(urun.urun, "arttir")}
            >
              +
            </button>{" "}
            {urun.urun.productName}- {urun.adet}{" "}
            <button
              style={{ cursor: "pointer", marginLeft: "5px" }}
              onClick={() => props.sepetguncelle(urun.urun, "azalt")}
            >
              -
            </button>
          </DropdownItem>
        ))}

        <DropdownItem divider />
        {props.sepet.length > 0 && (
          <DropdownItem onClick={props.sepetsifirla}>Sıfırla</DropdownItem>
        )}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Sepet;
