import { render } from '@testing-library/react-native';
import OrderList from '../components/OrderList';

test("Testar så att texten 'Ordrar redo att plockas' finns i OrderList", () => {
    const route = {};
    const navigation = {};

    const { getByText } = render(<OrderList navigation={navigation} route={route} />);
    const headerText = getByText("Ordrar redo att plockas");

    expect(headerText).toBeDefined();
});