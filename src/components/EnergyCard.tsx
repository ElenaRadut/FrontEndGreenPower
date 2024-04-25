import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Input,
    Button,
} from "@nextui-org/react";
import { useState } from "react";
import { FaBolt } from "react-icons/fa";
import { getEnergyData } from "../api/actions";

const EnergyCard: React.FC = () => {
    const [data, setData] = useState<EnergyData>();
    const [loadingState, setLoadingState] = useState(false);
    const [region, setRegion] = useState("");
    const [error, setError] = useState("");

    const handleSearch = () => {
        console.log("Fetching Energy Data...");
        console.log(region);
        setLoadingState(true);
        getEnergyData(region)
            .then((res) => {
                setError("");
                if (res) {
                    console.log(res);
                    setData(res);
                    setLoadingState(false);
                }
            })
            .catch((error) => {
                console.error(error);
                setLoadingState(false);
                setData(undefined);
                setError(error);
            });
    };

    return (
        <Card style={{ width: '600px' }}>
            <CardHeader className="flex gap-3">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch();
                    }}
                    className="w-full"
                >
                    <div className="flex flex-col w-full p-3 space-y-4">
                        <Input
                            id="regionname"
                            type="text"
                            label="Region"
                            value={region}
                            onChange={(e) => {
                                setRegion(e.target.value);
                            }}
                        />
                        <Button
                            className="bg-green-500 w-full py-3 rounded-md"
                            color="primary"
                            isLoading={loadingState}
                            type="submit"
                        >
                            Search
                        </Button>
                    </div>
                </form>
            </CardHeader>
            <Divider />
            {data ? (
                <CardBody>
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-green-500">{data.region}</h1>
                        <FaBolt className="w-36 h-36 text-green-500" />
                        <p className="text-3xl font-bold">{data.production} kWh</p>
                        <p className="text-lg">Consumption: {data.consumption} kWh</p>
                        <p className="text-lg">Price: {data.price} $/kWh</p>
                        <p className="text-lg">Timestamp: {data.timestamp.toString()}</p>


                    </div>
                </CardBody>
            ) : (
                <CardBody>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">Please enter a region</p>
                    </div>
                </CardBody>
            )}
            <Divider />
            <CardFooter>
                <div className="flex flex-col items-left">
                    {error && <p className="text-xs text-red-600 ">{error}</p>}
                    {data && (
                        <p className="text-xs  text-gray-600 ">Last update successful.</p>
                    )}
                    {!data && (
                        <p className="text-xs  text-gray-600 ">Waiting for input...</p>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default EnergyCard;
