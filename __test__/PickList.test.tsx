import { fireEvent, render } from '@testing-library/react-native';
import PickList from '../components/Picklist';

test("Testar så att knappen 'Packa order' faktiskt har titeln 'Packa order", () => {
    const route = {params: {order: {order_items: []}}};
    const setProducts = () => false;
    const navigation = {navigate: () => false};

    const { getByText, debug, getByRole } = render(<PickList route={route} setProducts={setProducts} navigation={navigation} />);
    const button = getByText("Packa order");

    expect(button.props.children).toEqual("Packa order");
    
});

test("Testar så att knappen 'Packa order' är inaktiv när inget orderobjekt skickas med", () => {
    const route = {params: {order: {order_items: []}}};
    const setProducts = () => false;
    const navigation = {navigate: () => false};

    const { getByText, debug, getByRole } = render(<PickList route={route} setProducts={setProducts} navigation={navigation} />);
    const button = getByText("Packa order");

    expect(button.props.disabled).toBeTruthy();
    
});