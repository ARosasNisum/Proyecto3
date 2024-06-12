import {ChangeEvent, useEffect, useRef, useState} from "react";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Panel} from "primereact/panel";
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Toast} from "primereact/toast";

interface Entity {
    id: number;
    attribute: string;
}

const EntityPage = () => {
    const [id, setId] = useState<number | ''>('');
    const [attribute, setAttribute] = useState<string>('');
    const [entities, setEntities] = useState<Entity[]>([]);
    const toast = useRef<Toast>(null);

    useEffect(() => {
        // Simulación de carga de datos inicial
        setEntities([
            {id: 1, attribute: 'Entity 1'},
            {id: 2, attribute: 'Entity 2'}
        ]);
    }, []);

    const handleAddEntity = () => {
        if (attribute.length >= 5) {
            const newId = entities.length + 1;
            setEntities([...entities, {id: newId, attribute}]);
            setId(newId);
            setAttribute('');
            toast.current?.show({
                severity: 'success',
                summary: 'Success',
                detail: 'Entity added successfully',
                life: 2000
            });
        } else {
            toast.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Attribute must be at least 5 characters',
                life: 2000
            });
        }
    };

    const handleReset = () => {
        setId('');
        setAttribute('');
        toast.current?.show({severity: 'info', summary: 'Info', detail: 'Form reset', life: 2000});
    };

    return (
        <div className="p-fluid">
            <Toast ref={toast}/>
            <Panel header="Entity Details">
                <div className="p-field p-grid">
                    <label htmlFor="id" className="p-col-12 p-md-2">Id:</label>
                    <div className="p-col-12 p-md-10">
                        <InputText id="id" value={id.toString()} disabled/>
                    </div>
                </div>
                <div className="p-field p-grid">
                    <label htmlFor="attribute" className="p-col-12 p-md-2">Attribute:</label>
                    <div className="p-col-12 p-md-10">
                        <InputText id="attribute" value={attribute}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => setAttribute(e.target.value)}/>
                        {attribute && attribute.length < 5 &&
                            <small className="p-error">Attribute must be at least 5 characters</small>}
                    </div>
                </div>
                <div className="p-field p-grid">
                    <div className="p-col-12 p-md-2"></div>
                    <div className="p-col-12 p-md-10">
                        <Button id="addUser" label="Add" onClick={handleAddEntity}/>
                        <Button id="reset" label="Reset" className="p-button-secondary" onClick={handleReset}/>
                    </div>
                </div>
            </Panel>
            <br/>
            <Panel header="Elements">
                <DataTable value={entities} style={{width: '50%'}} paginator rows={10}>
                    <Column field="id" header="ID" sortable></Column>
                    <Column field="attribute" header="Name"></Column>
                </DataTable>
            </Panel>
        </div>
    );
};

export default EntityPage;