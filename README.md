# QUERIES

## ALL IMAGES
```json
query {
  allImages {
    content {
      id
      imageabletype
      imageableid
      base64
    }
    message
  }
}
```

## IMAGES BY TYPE
```json
query {
  imageByType(imageabletype: 2) {
    content {
      id
      imageabletype
      imageableid
      base64
    }
    message
  }
}
```

## IMAGES BY OWNER ID
```json
query {
  imageByOwner(imageableid: 2) {
    content {
      id
      imageabletype
      imageableid
      base64
    }
    message
  }
}
```

## IMAGES BY TYPE AND OWNER ID
```json
query {
  imageByTypeAndOwner(imageabletype: 2, imageableid: 2) {
    content {
      id
      imageabletype
      imageableid
      base64
    }
    message
  }
}
```

## IMAGES BY ID
```json
query {
  imageById(id: 3) {
    content {
      id
      imageabletype
      imageableid
      base64
    }
    message
  }
}
```

# MUTATIONS

## CREATE IMAGE
```json
mutation {
  createImage(image: {
    content:"Dacherreragu"
    imageabletype:3
    imageableid:3
  }) {
    content {
      id
      imageabletype
      imageableid
      base64
    }
    message
  }
}
```

## DELETE IMAGE
```json
mutation {
  deleteImage(id: 1) {
    content {
      imageabletype
      imageableid
    }
    message
  }
}
```

