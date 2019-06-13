<template>
  <div id="app">
    <h1>Asset summary for '{{ sampleAddress }}':</h1>
    <ul>
      <li>Coordinates: {{ asset.coordinates }}</li>
      <li>Address: {{ asset.address }}</li>
      <li>Attributes: {{ asset.attributes }}</li>
      <li>Property Type: {{ asset.property_type }}</li>
      <li>Price: {{ asset.price }}</li>
      <li>Historical Sales: {{ asset.historical_sales }}</li>
    </ul>
  </div>
</template>

<script>
import { SampleServiceClient } from './protocol_buffer_compiled/service_grpc_web_pb';
import { SampleRequest, SampleReply } from './protocol_buffer_compiled/service_pb';


export default {
  name: 'app',
  data() {
    return {
      sampleAddress: 'sample address',
      asset: {
        coordinates: 'c',
        address: 'ad',
        attributes: 'at',
        property_type: 'pt',
        price: 0,
        historical_sales: 'hs'
      }
    }
  },
  mounted() {
    this.getAssetSummary('sample address');
  },
  methods: {
    getAssetSummary: function(sampleAddress) {
      const sampleService = new SampleServiceClient('http://localhost:8888', null, null);
      const request = new SampleRequest();
      request.setAddress(sampleAddress);

      let self = this;
      const call = sampleService.GetSampleSummary(request, {}, (error, response) => {
        self.asset.coordinates = response.getCoordinates();
        self.asset.address = response.getAddress();
        self.asset.attributes = response.getAttributes();
        self.asset.property_type = response.getPropertyType();
        self.asset.price = response.getPrice();
        self.asset.historical_sales = response.getHistoricalSales();
        if (error) console.log(error);
      });

      call.on('status', function(status) {
        if (status.code != 0) console.log(status.metadata);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
