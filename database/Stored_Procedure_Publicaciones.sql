-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Abraham Roman
-- Create date: 22/06/2023
-- Description:	Procedimiento de prueba
-- =============================================
CREATE PROCEDURE Publicaciones 
	-- Add the parameters for the stored procedure here
	@tipo nvarchar(50) = NULL
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT p.id_publicacion,p.fecha,p.descripcion,u.nombre,u.appat,u.apmat FROM Publicacion p JOIN TipoPublicacion T ON T.id_tipo=p.id_tipo JOIN Usuario u ON u.id_usuario=p.id_usuario WHERE tipo=@tipo;
END
GO
