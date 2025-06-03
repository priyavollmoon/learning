import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AsynchroCom = () => {
    const [fetchData, setFetchData] = useState([]);
    const [editedId, setEditedId] = useState(null);
    const [newEditedData, setNewEditedData] = useState({
        name: "",
        email: "",
    });

    const createData = {
        postId: 1,
        id: 6,
        name: "harini",
        email: "harini@gmail.com",
        body: "reference",
    };

    useEffect(() => {
        const fetchData = () => {
            return new Promise((resolve, reject) => {
                fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
                    .then((res) => {
                        if (!res.ok) {
                            console.log("network res is not ok");
                            reject("res is not ok");
                        } else {
                            return res.json();
                        }
                    })
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        };
        let interval;
        fetchData()
            .then((data) => {
                toast.success("Data fetched successfully!");
                setFetchData(data);
                const interval = setInterval(() => {
                    const randomItem = data[Math.floor(Math.random() * data.length)];
                    setFetchData((prev) => [
                        ...prev,
                        { ...randomItem, id: prev.length + 10 },
                    ]);
                    toast.info("Random item added");
                }, 38000);
            })
            .catch((error) => {
                toast.error("Something went wrong!");
            });
        return () => clearInterval(interval);
    }, []);

    // console.log("fetchData====", fetchData);

    const handleAddButton = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(createData),
            });

            const result = await res.json();

            setTimeout(() => {
                setFetchData((prev) => [...prev, result]);
                toast.success("Data added successfully!");
            }, 2000);
        } catch (error) {
            toast.error("Failed to add data!");
        }
    };
    const handleEditButton = (item) => {
        setEditedId(item.id);
        toast.success("id set in state");
        setNewEditedData({ name: item.name, email: item.email });
    };
    const handleSaveButton = (id) => {
        const updateArray = fetchData.map((rows) =>
            rows.id === id ? { ...rows, ...newEditedData } : rows
        );
        setFetchData(updateArray);
        toast.success("saved new data");
        setEditedId(null);
    };
    const handleDeleteButton = (id) => {
        const deleteData = fetchData.filter((item) => item.id !== id);
        setFetchData(deleteData);
    };
    return (
        <div>
            <h1>AsynchroCom</h1>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>PostId</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {fetchData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.postId}</td>
                            <td>{item.id}</td>
                            <td>
                                {editedId === item.id ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={newEditedData.name}
                                        onChange={(e) =>
                                            setNewEditedData({
                                                ...newEditedData,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    item.name
                                )}
                            </td>

                            <td>
                                {editedId === item.id ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={newEditedData.email}
                                        onChange={(e) =>
                                            setNewEditedData({
                                                ...newEditedData,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    item.email
                                )}
                            </td>
                            <td>
                                <button onClick={handleAddButton}>Add</button>
                            </td>
                            {editedId === item.id ? (
                                <td>
                                    <button onClick={() => handleSaveButton(item.id)}>
                                        save
                                    </button>
                                </td>
                            ) : (
                                <td>
                                    <button onClick={() => handleEditButton(item)}>Edit</button>
                                </td>
                            )}
                            <td>
                                <button onClick={() => handleDeleteButton(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AsynchroCom;
