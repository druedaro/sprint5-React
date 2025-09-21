# Guía de Testing para el Proyecto Bookmark

Esta guía proporciona una visión general de cómo se realizan los tests en nuestro proyecto React.

## 🎯 Estructura de Tests

```
src/
  components/
    atoms/
      __tests__/          # Tests para componentes atómicos
        Button.test.tsx
        Logo.test.tsx
    molecules/
      __tests__/          # Tests para componentes moleculares
        NavMenu.test.tsx
        MobileMenu.test.tsx
```

## 🛠 Herramientas Utilizadas

- **Jest**: Framework principal de testing
- **React Testing Library**: Para testing de componentes React
- **@testing-library/user-event**: Para simular interacciones de usuario

## 📝 Guía de Escritura de Tests

### 1. Tests Básicos de Renderizado
```typescript
it('renders component correctly', () => {
  render(<MyComponent />);
  expect(screen.getByText('Texto esperado')).toBeInTheDocument();
});
```

### 2. Tests de Interacción de Usuario
```typescript
it('responds to user interaction', async () => {
  const handleClick = jest.fn();
  const user = userEvent.setup();
  
  render(<Button onClick={handleClick}>Click me</Button>);
  await user.click(screen.getByRole('button'));
  
  expect(handleClick).toHaveBeenCalled();
});
```

### 3. Tests de Accesibilidad
```typescript
it('has correct accessibility attributes', () => {
  render(<Button aria-label="Close menu">×</Button>);
  expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
});
```

## 🔍 Qué Testear

1. **Renderizado Básico**: ¿El componente se renderiza sin errores?
2. **Props**: ¿El componente maneja correctamente diferentes props?
3. **Interacciones**: ¿Responde correctamente a clicks, hover, etc.?
4. **Accesibilidad**: ¿Tiene los roles y labels correctos?
5. **Estados**: ¿Cambia correctamente entre diferentes estados?

## 🏃‍♂️ Cómo Ejecutar los Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch

# Ejecutar tests de un componente específico
npm test -- Button
```

## 📚 Ejemplos de Tests

### Componente Simple (Button)
- Renderizado de diferentes variantes
- Manejo de eventos click
- Estilos condicionales

### Componente Complejo (MobileMenu)
- Estado abierto/cerrado
- Navegación
- Interacciones de usuario
- Accesibilidad

## ✅ Buenas Prácticas

1. Usa nombres descriptivos para los tests
2. Agrupa tests relacionados con `describe`
3. Test uno o pocos comportamientos por test
4. Usa roles y labels para queries
5. Simula interacciones reales de usuario
6. Incluye tests de accesibilidad básicos