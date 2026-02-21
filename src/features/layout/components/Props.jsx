import React from "react";

// Función corregida
function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

// Componente Avatar
const Avatar = ({ person, size }) => {
  return (
    <div className="text-center">
      <img
        className="avatar img-fluid rounded-circle shadow"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
      <p className="mt-2 fw-semibold">{person.name}</p>
    </div>
  );
};

// Componente principal
export default function Props() {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-3">Props React</h2>

      <p className="text-muted mb-5">
        Este componente demuestra el uso de props en React.
        Cada Avatar recibe datos desde el componente padre,
        permitiendo reutilizar el mismo componente con diferente información.
      </p>

      <div className="row justify-content-center g-4">
        <div className="col-md-3">
          <Avatar
            size={120}
            person={{
              name: 'Katsuko Saruhashi',
              imageId: 'YfeOqp2'
            }}
          />
        </div>

        <div className="col-md-3">
          <Avatar
            size={100}
            person={{
              name: 'Aklilu Lemma',
              imageId: 'OKS67lh'
            }}
          />
        </div>

        <div className="col-md-3">
          <Avatar
            size={90}
            person={{
              name: 'Lin Lanying',
              imageId: '1bX5QH6'
            }}
          />
        </div>
      </div>
    </div>
  );
}