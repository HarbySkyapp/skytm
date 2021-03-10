export default function Autoincremental_Num_Sol(clientAPI) {

	return clientAPI.count('/SkyTM/Services/SkyTM.service', 'SOLICITUDES').then((count) => {
		clientAPI.getPageProxy().getClientData().EquipmentTotalCount = count;
		// If “Customers” Entity set is availale, then it return the total customers
		let Au_In;
		Au_In = (count +1); 
		return Au_In;
	});
}