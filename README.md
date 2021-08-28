# Projeto de teste para usar injeção de dependências

Para usar o [TypeDI](https://www.npmjs.com/package/typedi), os principais ajustes para fazê-lo funcionar são: 

Importar o [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) no começo do arquivo inicial do projeto (o arquivo que é chamado no script `start`, por exemplo)

E adicionar essas duas propriedades no `compilerOptions` do **tsconfig.json**:

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```
