protoc --js_out=library=dtcprotocol_proto2,binary:./js DTCProtocol.proto
protoc --java_out=./java DTCProtocol.proto
REM protoc --csharp_out=./csharp DTCProtocol.proto
protoc --cpp_out=./cpp DTCProtocol.proto
protoc --go_out=./go DTCProtocol.proto



protoc --js_out=library=dtcprotocol_proto3,binary:./js DTCProtocol.GPBV3.proto
protoc --java_out=./java DTCProtocol.GPBV3.proto
protoc --csharp_out=./csharp DTCProtocol.GPBV3.proto
protoc --cpp_out=./cpp DTCProtocol.GPBV3.proto
protoc --go_out=./go DTCProtocol.GPBV3.proto