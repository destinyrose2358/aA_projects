import gql from "graphql-tag";

export default {
  DELETE_GOD: gql`
    mutation DeleteGod($id: ID!) {
      deleteGod(id: $id) {
        id
      }
    }
  `,
  NEW_GOD: gql`
    mutation NewGod($name: String, $type: String, $description: String) {
      newGod(name: $name, type: $type, description: $description) {
        id
        name
        description
      }
    }
  `,
  UPDATE_GOD_NAME: gql`
    mutation updateGod($id: ID, $name: String) {
      updateGod(id: $id, name: $name) {
        id
        name
      }
    }
  `,
  UPDATE_GOD_TYPE: gql`
    mutation updateGod($id: ID, $type: String) {
      updateGod(id: $id, type: $type) {
        id
        type
      }
    }
  `,
  UPDATE_GOD_DESCRIPTION: gql`
    mutation updateGod($id: ID, $description: String) {
      updateGod(id: $id, description: $description) {
        id
        description
      }
    }
  `,
  UPDATE_GOD_ABODE: gql`
    mutation updateGodAbode($godId: ID, $abodeId: ID) {
      updateGodAbode(godId: $godId, abodeId: $abodeId) {
        id
        abode {
          id
          name
        }
      }
    }
  `,
  ADD_GOD_DOMAIN: gql`
    mutation AddGodDomain($id: ID, $domain: String) {
      addGodDomain(godId: $id, domain: $domain) {
        id
        domains
      }
    }
  `,
  DELETE_GOD_DOMAIN: gql`
    mutation DeleteGodDomain($id: ID, $domain: String) {
      removeGodDomain(godId: $id, domain: $domain) {
        id
        domains
      }
    }
  `,
  NEW_EMBLEM: gql`
    mutation NewEmblem($name: String) {
      newEmblem(name: $name) {
        id
        name
      }
    }
  `,
  NEW_ABODE: gql`
    mutation NewAbode($name: String, $coordinates: String) {
      newAbode(name: $name, coordinates: $coordinates) {
        id
        name
        coordinates
      }
    }
  `
};