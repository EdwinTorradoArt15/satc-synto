import { Controller } from "react-hook-form";
import { useModalVehiculos } from "@/features/registro/vehiculos/hooks";
import { Loader } from "@/components";
import Select from "react-select";

const ModalVehiculos = () => {
  const {
    currentVehiculos,
    handleClose,
    loading,
    marcas,
    methodsVehiculos,
    onSubmit,
    paises,
    tiposVehiculos,
    findPlaca,
  } = useModalVehiculos();

  const formatPaises = paises.map((item) => ({
    value: item.id,
    label: item.nombre,
  }));

  const formatMarcas = marcas.map((item) => ({
    value: item.id,
    label: item.nombre,
  }));

  const formatTipoVehiculo = tiposVehiculos.map((item) => ({
    value: item.id,
    label: item.nombre,
  }));

  return (
    <div
      id="hs-focus-management-modal-vehiculo"
      className="hs-overlay hidden ti-modal"
    >
      <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out md:!max-w-2xl md:w-full m-3 md:mx-auto">
        <div className="ti-modal-content">
          <div className="ti-modal-header">
            <h3 className="ti-modal-title">
              {currentVehiculos.id ? "Editar" : "Agregar"} vehiculo
            </h3>
            <button
              type="button"
              className="hs-dropdown-toggle ti-modal-close-btn"
              data-hs-overlay="#hs-focus-management-modal-vehiculo"
              onClick={handleClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3.5 h-3.5"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={methodsVehiculos.handleSubmit(onSubmit)}>
            <div className="ti-modal-body grid grid-cols-2 gap-2">
              <Controller
                name="placa"
                control={methodsVehiculos.control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field }) => (
                  <div className="mt-2">
                    <label
                      className={`block text-sm mb-2 dark:text-white ${
                        methodsVehiculos.formState.errors.placa
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Placa
                    </label>
                    <input
                      {...field}
                      type="text"
                      className={`py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70 ${
                        methodsVehiculos.formState.errors.placa
                          ? "focus:border-red-500 focus:red-500 dark:border-red-500 dark:focus:border-red-500 dark:focus:red-500 border-red-500"
                          : ""
                      }`}
                      onBlur={(e) => findPlaca(e.target.value)}
                      placeholder="Placa"
                      autoFocus
                    />
                    {methodsVehiculos.formState.errors.placa ? (
                      <span className="text-xs text-red-500">
                        Campo requerido
                      </span>
                    ) : null}
                  </div>
                )}
              />
              <Controller
                name="marca"
                control={methodsVehiculos.control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field }) => (
                  <div className="mt-2">
                    <label
                      className={`block text-sm mb-2 dark:text-white ${
                        methodsVehiculos.formState.errors.marca
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Marca
                    </label>
                    <Select
                      {...field}
                      classNamePrefix="react-select"
                      options={formatMarcas}
                      placeholder="Seleccione una marca"
                    />
                    {methodsVehiculos.formState.errors.marca ? (
                      methodsVehiculos.formState.errors.marca.type ===
                      "required" ? (
                        <span className="text-xs text-red-500">
                          Campo requerido
                        </span>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </div>
                )}
              />
              <Controller
                name="tipo_vehiculo"
                control={methodsVehiculos.control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field }) => (
                  <div className="mt-2">
                    <label
                      className={`block text-sm mb-2 dark:text-white ${
                        methodsVehiculos.formState.errors.tipo_vehiculo
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Tipo de documento
                    </label>
                    <Select
                      {...field}
                      classNamePrefix="react-select"
                      options={formatTipoVehiculo}
                      placeholder="Seleccione un tipo de documento"
                    />
                    {methodsVehiculos.formState.errors.tipo_vehiculo ? (
                      methodsVehiculos.formState.errors.tipo_vehiculo.type ===
                      "required" ? (
                        <span className="text-xs text-red-500">
                          Campo requerido
                        </span>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </div>
                )}
              />
              <Controller
                name="pais"
                control={methodsVehiculos.control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field }) => (
                  <div className="mt-2">
                    <label
                      className={`block text-sm mb-2 dark:text-white ${
                        methodsVehiculos.formState.errors.pais
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Pais
                    </label>
                    <Select
                      {...field}
                      classNamePrefix="react-select"
                      options={formatPaises}
                      placeholder="Seleccione un pais"
                    />
                    {methodsVehiculos.formState.errors.pais ? (
                      <span className="text-xs text-red-500">
                        Campo requerido
                      </span>
                    ) : null}
                  </div>
                )}
              />
              <Controller
                name="modelo"
                control={methodsVehiculos.control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field }) => (
                  <div className="mt-2">
                    <label
                      className={`block text-sm mb-2 dark:text-white ${
                        methodsVehiculos.formState.errors.modelo
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Modelo
                    </label>
                    <input
                      {...field}
                      type="number"
                      className={`py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70 ${
                        methodsVehiculos.formState.errors.modelo
                          ? "focus:border-red-500 focus:red-500 dark:border-red-500 dark:focus:border-red-500 dark:focus:red-500 border-red-500"
                          : ""
                      }`}
                      placeholder="Modelo"
                      autoFocus
                    />
                    {methodsVehiculos.formState.errors.modelo ? (
                      <span className="text-xs text-red-500">
                        Campo requerido
                      </span>
                    ) : null}
                  </div>
                )}
              />
              <Controller
                name="numchasis"
                control={methodsVehiculos.control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field }) => (
                  <div className="mt-2">
                    <label
                      className={`block text-sm mb-2 dark:text-white ${
                        methodsVehiculos.formState.errors.numchasis
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Numero de chasis
                    </label>
                    <input
                      {...field}
                      type="text"
                      className={`py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70 ${
                        methodsVehiculos.formState.errors.numchasis
                          ? "focus:border-red-500 focus:red-500 dark:border-red-500 dark:focus:border-red-500 dark:focus:red-500 border-red-500"
                          : ""
                      }`}
                      placeholder="Numero de chasis"
                      autoFocus
                    />
                    {methodsVehiculos.formState.errors.numchasis ? (
                      <span className="text-xs text-red-500">
                        Campo requerido
                      </span>
                    ) : null}
                  </div>
                )}
              />
              <Controller
                name="numerohabilitacion"
                control={methodsVehiculos.control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field }) => (
                  <div className="mt-2">
                    <label
                      className={`block text-sm mb-2 dark:text-white ${
                        methodsVehiculos.formState.errors.numerohabilitacion
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Numero de habilitacion
                    </label>
                    <input
                      {...field}
                      type="text"
                      className={`py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70 ${
                        methodsVehiculos.formState.errors.numerohabilitacion
                          ? "focus:border-red-500 focus:red-500 dark:border-red-500 dark:focus:border-red-500 dark:focus:red-500 border-red-500"
                          : ""
                      }`}
                      placeholder="Numero de habilitacion"
                      autoFocus
                    />
                    {methodsVehiculos.formState.errors.numerohabilitacion ? (
                      <span className="text-xs text-red-500">
                        Campo requerido
                      </span>
                    ) : null}
                  </div>
                )}
              />
            </div>
            <div className="ti-modal-footer">
              <button
                type="button"
                className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                data-hs-overlay="#hs-focus-management-modal-vehiculo"
                onClick={handleClose}
              >
                Cerrar
              </button>
              <button type="submit" className="ti-btn ti-btn-primary">
                {loading ? (
                  <Loader />
                ) : currentVehiculos.id ? (
                  "Actualizar"
                ) : (
                  "Crear"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalVehiculos;
