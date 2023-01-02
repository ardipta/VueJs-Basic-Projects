<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-info fw-bold">
            Add Contact
          </p>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-5">
          <form action="">
            <div class="mb-2">
              <input type="text" class="form-control" placeholder="Enter Name">
            </div>
            <div class="mb-2">
              <input type="text" class="form-control" placeholder="Enter Image URL">
            </div>
            <div class="mb-2">
              <input type="email" class="form-control" placeholder="Enter Email">
            </div>
            <div class="mb-2">
              <input type="tel" class="form-control" placeholder="Enter Mobile">
            </div>
            <div class="mb-2">
              <input type="submit" class="btn btn-info" value="Create">
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AddContact"
    }
</script>

<style>

</style>