const CourierDetails=(props)=>
{
    const {data}=props
    console.log(data)
    return(
        <div class="table-alignment mt-3  mr-5">
        <table class="table table-striped">
          <thead class="headingrow">
            <tr>
              <th scope="col">More Details</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Current Status</th>
              <td class="textend">{data.status}</td>
            </tr>

            <tr>
              <th scope="row">Location</th>
              <td class="textend">{data.location}</td>
            </tr>



            <tr>
              <th scope="row">Estimated Delivery Date</th>
              <td class="textend">{data.EstimatedDelivery}</td>
            </tr>

            <tr>
              <th scope="row">Courier Departure Date</th>
              <td class="textend">{data.DateOfOrdered}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
export default CourierDetails