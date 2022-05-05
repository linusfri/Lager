import { render } from "@testing-library/react-native";
import StockList from '../components/Stocklist';

const products = [
    {name: "gitarr" , stock: 2},
    {name: "strängar" , stock: 2},
    {name: "plektrum" , stock: 2}
];

const setProducts = () => false;

test("List should contain three items", async () => {
    const { getByText } = render(<StockList products={products} setProducts={setProducts} />)

    const gitarr = await getByText("gitarr", {exact: false});
    const strangar = await getByText("strängar", {exact: false});
    const plektrum = await getByText("plektrum", {exact: false});

    expect(gitarr).toBeDefined();
    expect(strangar).toBeDefined();
    expect(plektrum).toBeDefined();
});